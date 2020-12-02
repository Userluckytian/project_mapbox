import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapstaticService } from './mapstatic.service';
// TODO: 1、除了draw中包含的还有一部分不确定是什么？
// 答：对于一些奇奇怪怪的形状，可以设置其type为circle，然后在这里引入，如createBox，请搜索createBox();
import Draw, { createBox } from 'ol/interaction/Draw';
import { Vector as VectorSource } from 'ol/source';
// TODO: 2、snap是干啥的？
// 答：保持原有拓扑关系 https://blog.csdn.net/u011435933/article/details/80445080
import { Snap } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
// TODO: 3、style是做什么的？
// 答：设置样式 【好文要顶】https://www.cnblogs.com/lishanyang/p/6071528.html
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';

@Component({
  selector: 'app-mapstatic',
  templateUrl: './mapstatic.component.html',
  styleUrls: ['./mapstatic.component.scss']
})
export class MapstaticComponent implements OnInit, OnDestroy {


  // 定义全局变量用于后面移除绘制内容！
  draw;
  snap;
  map;
  // 监听器，不确认其作用
  listener;
  constructor(private olService: MapstaticService) { }

  ngOnInit() {
    this.map = this.olService.createOlMap('olmap');
  }


  // tslint:disable-next-line: typedef
  doDraw(e) {
    if (this.draw && this.snap) {
      this.map.removeInteraction(this.draw);
      this.map.removeInteraction(this.snap);
    }
    const vectorSource = new VectorSource({ wrapX: false });
    this.addToMap(vectorSource);
    let drawOptions = null;
    if (e.title === '框选') {
      drawOptions = { source: vectorSource, type: 'Circle', geometryFunction: createBox() };
    } else {
      drawOptions = { source: vectorSource, type: e.id };
    }
    this.draw = new Draw(drawOptions);
    this.map.addInteraction(this.draw);
    this.snap = new Snap({ source: vectorSource });
    this.map.addInteraction(this.snap);
    // 添加事件
    this.draw.on('drawstart', event => {
      console.log('todo-start', event);
    });

    this.draw.on('drawend', event => {
      console.log('todo-end', event);
    });
  }

  // tslint:disable-next-line: typedef
  addToMap(Vsource) {
    const vector = new VectorLayer({
      source: Vsource,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new Stroke({
          color: '#ffcc33',
          width: 2,
        }),
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({
            color: '#ffcc33',
          }),
        }),
      }),
    });
    this.map.addLayer(vector);
  }

  // tslint:disable-next-line: typedef
  clearData() {
    this.map = null;
    this.draw = null;
    this.snap = null;
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.clearData();
  }
}
