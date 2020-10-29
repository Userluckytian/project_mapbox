import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

mapboxgl.srid = 4326;   // 4326 or 3857


@Injectable({
  providedIn: 'root'
})
export class BoxmapService {

  styleinit = false;

  specialStyel = null;

  mapboxmap = null;

  constructor(
    private http: HttpClient,
    // private dataRxInquireService: ModuleDataRxInquireService
  ) {
    // this.init();
    this.init().then((res) => {
      console.log("地图创建完成");
      this.mapboxmap.on("load", () => {
        console.log("样式加载完成");
        // this.addSplieGroupLayer();
        // this.getSpecialMapIcon().then((icon: any) => {
        //   this.addFunctionIcon(icon);
        // });
      });
    });
  }

  /**
   * 底图初始化、单例创建地图、加载专题图配置文件
   */
  init() {
    let self = this;
    if (this.mapboxmap || this.specialStyel) {
      return new Promise((resolve, reject) => {
        resolve(this.mapboxmap);
      });
    } else {
      return Promise.all([
        this.getBaseMapStyle().then((style_base: any) => {
          return this.createSpMap(style_base);
        }),
        // 先不考虑专题图
        // this.getSpecialMapStyle().then((style_special: any) => {
        //   self.specialStyel = style_special;
        //   return style_special; //
        // }),
      ]).then((res) => {
        return res[0];
      });
    }
  }

    /**
   * 获取底图样式配置文件
   */
  private getBaseMapStyle() {
    // return this.http
    //   .get(this.base_map_style)
    //   .toPromise()
    //   .catch(err => {
    //     console.log(err);
    //   });
    //
    // return this.dataRxInquireService.get('mapboxmap', 'base.map').toPromise();
    return this.http.get('http://webres.cityfun.com.cn/fhgx_zt/fh_base/map.json').toPromise();
  }
  /**
   * 获取专题图样式配置文件
   */
  private getSpecialMapStyle() {
  }

  /**
   *
   * @param style  创建地图
   */
  private createSpMap(style) {
    let self = this;
    return new Promise((resolve, reject) => {
      if (this.mapboxmap) {
        resolve(this.mapboxmap);
      } else {
        let tmpstyle = {
          container: "mapboxmap",
          style: style,
          minZoom: 11,
          // zoom: 11.5,
          // center: [120.79365, 31.05595],
          // pitch: 53.99999999999998,
          // bearing: -8.000000000000115,
        };
        self.mapboxmap = new mapboxgl.Map(tmpstyle);
        resolve(self.mapboxmap);
      }
    });
  }

}
