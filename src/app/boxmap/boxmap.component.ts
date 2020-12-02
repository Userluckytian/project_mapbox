import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoxmapService } from './boxmap.service';
import { MapDrawtoolsService } from './map-drawtools.service';
import * as turf from '@turf/turf';

@Component({
  selector: 'app-boxmap',
  templateUrl: './boxmap.component.html',
  styleUrls: ['./boxmap.component.scss']
})
export class BoxmapComponent implements OnInit, OnDestroy {

  mapboxmap = null;
  draw = null;
  // 单纯绘制（基本不可能，估计会实现空间查询）
  startDraw = false;
  // 执行测量(线、面)
  startMeasure = false;
  // 存储测量的坐标点信息
  MeasureCoorDinates = [];
  // 测量的类型
  measureType = '';
  popup = null;
  ids = [];
  // 用户最新绘制的图层的id
  currentid = '';
  // 优秀操作，以后自己也要记得！并不是只可以创建内部单一对象元素，我们可以创建出来多个！外部！元素！
  popups = {};
  constructor(
    private mapService: BoxmapService,
    private mapDrawtoolsService: MapDrawtoolsService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // this.mapboxmap = this.mapService.init();
    this.mapService.init().then((mapboxglmap: any) => {
      this.mapboxmap = mapboxglmap;
      if (mapboxglmap.isStyleLoaded()) {
        this.Init();
      } else {
        mapboxglmap.on('load', () => {
          this.Init();
        });
      }
    });
  }

  Init() {
    this.draw = this.mapDrawtoolsService.getDrawTools();
    this.mapboxmap.addControl(this.draw, 'top-right');
    this.addListerDraw(this.mapboxmap);
  }

  doDraw(e) {
    this.startDraw = true;
    this.draw.changeMode(e.id);
  }

  // tslint:disable-next-line: typedef
  doMeasure(e) {
    if (e.id === 'delete') {
      // 重置！
      this.closeMeasure();
      if (this.ids.length > 0) {
        this.mapDrawtoolsService.clearById(this.ids);
        this.removePupupById(this.ids);
        return;
      }
    } else {
      this.MeasureCoorDinates = [];
      this.draw.changeMode(e.id);
      this.startMeasure = true;
      this.measureType = e.measureType;
    }
  }

  // tslint:disable-next-line: typedef
  addListerDraw(map) {
    const self = this;
    map.on('draw.create', updateArea);
    // map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);
    map.on('draw.selectionchange', doChanges);
    // tslint:disable-next-line: typedef
    function updateArea(e) {
      // TODO:暂时无法控制什么时候startDraw是true状态，所以我先把这句话放在外面！
      self.currentid = e.features[0].id;
      if (self.startDraw) {
        // 获取地图上绘制的所有元素！
        const data = self.draw.getAll();
      } else if (self.startMeasure) {
        // self.currentid = e.features[0].id;
      }
    }
    // tslint:disable-next-line: typedef
    function doChanges(e) {
      self.ids = [];
      (e.features).forEach(element => {
        self.ids.push(element.id);
      });
    }
    // 点击事件
    map.on('click', e => {
      const { lng, lat } = e.lngLat;
      if (self.startMeasure) {
        self.MeasureCoorDinates.push([lng, lat]);
      }
    });
    // 双击事件
    map.on('dblclick', e => {
      const { lng, lat } = e.lngLat;
      if (self.startMeasure) {
        self.MeasureCoorDinates.push([lng, lat]);
        // 先更新信息
        // 优秀操作：每次的id是不同的，同样的，这个对象会生成很多信息！
        self.popups[self.currentid] = new mapboxgl.Popup({ closeButton: false, closeOnClick: false });
        if (this.measureType === 'length') {
          const line = turf.lineString(self.MeasureCoorDinates);
          const length = turf.length(line, { units: 'miles' });
          self.popups[self.currentid].setLngLat([lng, lat])
            .setHTML(`${Math.floor(length * 100) / 100} km`).addTo(this.mapboxmap);
        } else {
          const newcoords = this.isClosedShape(self.MeasureCoorDinates);
          // 外面再新增一层[]！
          const polygon = turf.polygon([newcoords]);
          const area = turf.area(polygon);
          const center = turf.centerOfMass(polygon);
          self.popups[self.currentid].setLngLat(center.geometry.coordinates)
            .setHTML(`${Math.floor(area / 1000 / 1000 * 100) / 100} km<sup>2</sup>`).addTo(this.mapboxmap);
        }
        // 停止一切可能的事件（双击代表停止绘制，首先设置startMeasure = false;空间查询的后面考虑）
        self.startMeasure = false;
        self.measureType = '';
      }
    });
    // 鼠标移动事件
    map.on('mousemove', e => {
      const { lng, lat } = e.lngLat;
      if (self.startMeasure) {
        // 重新定义一个新的数组
        const tempCoordinates = [...self.MeasureCoorDinates, [lng, lat]];
        // 执行长度测量
        if (self.measureType === 'length' && tempCoordinates.length > 1) {
          self.measureLength(tempCoordinates, e);
        }
        // 执行面积测量
        if (self.measureType === 'area' && tempCoordinates.length > 2) {
          self.measureArea(tempCoordinates);
        }
      }
    });
  }

  // 长度测量
  // tslint:disable-next-line: typedef
  measureLength(coords, e) {
    const line = turf.lineString(coords);
    const length = turf.length(line, { units: 'miles' });
    // 中间的参数为最后一个坐标点的经纬度
    // this.showMeasureInfo(length, e, 'length');
  }

  // 面积测量
  // tslint:disable-next-line: typedef
  measureArea(coords) {
    const newcoords = this.isClosedShape(coords);
    // 外面再新增一层[]！
    const polygon = turf.polygon([newcoords]);
    const area = turf.area(polygon);
    const center = turf.centerOfMass(polygon);
    // 中间的参数为面的中心点
    // this.showMeasureInfo(area, center, 'area');
  }

  // 封闭图形坐标判断
  // tslint:disable-next-line: typedef
  isClosedShape(coords) {
    // 对最后一个坐标点增加逻辑判断：如果最后一个点不等一第一个点，则增加最后一个点坐标为起点坐标，否则直接使用即可！
    if (coords && coords.length > 2) {
      // 经度和纬度都比了一番
      if (coords[coords.length - 1][0] === coords[0][0] && coords[coords.length - 1][1] === coords[0][1]) {
        return coords;
      } else {
        coords[coords.length] = coords[0];
        return coords;
      }
    }
  }

  // 弹出Popup框显示信息
  // tslint:disable-next-line: typedef
  showMeasureInfo(data, coord, flag) {
    // 定义popup框
    this.popup = this.popup ? this.popup : new mapboxgl.Popup({ closeButton: false, closeOnClick: false });

    if (flag === 'length') {
      const { lng, lat } = coord.lngLat;
      // 获取经纬度信息
      this.popup.setLngLat([lng, lat])
        .setHTML(`${Math.floor(data * 100) / 100} km`).addTo(this.mapboxmap);
    }
    if (flag === 'area') {
      this.popup.setLngLat(coord.geometry.coordinates)
        .setHTML(`${Math.floor(data / 1000 / 1000 * 100) / 100} km<sup>2</sup>`).addTo(this.mapboxmap);
    }
  }

  // 关闭测量
  // tslint:disable-next-line: typedef
  closeMeasure() {
    this.startMeasure = false;
    this.startDraw = false;
    this.measureType = '';
    this.MeasureCoorDinates = [];
  }

  // 移除popup
  // tslint:disable-next-line: typedef
  removePupupById(ids) {
    if(ids.length > 0){
      ids.forEach( element => {
        // 有的ids并不包含popups窗体，所以需要加个判断防止出现该情况！
        if(this.popups[element]){
          this.popups[element].remove();
          // TODO:(不能只是新增而不减少)移除指定元素！
          delete this.popups[element];
        }
      });
    }
    // 最终设置ids的内容为空！
    this.ids = [];
  }

  // 销毁事件
  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    // 清空绘制
    this.mapDrawtoolsService.resetDraw(this.mapboxmap);
    // 地图也处理掉
    this.mapboxmap = null;
  }

}
