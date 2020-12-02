import { Injectable } from '@angular/core';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';
import { CircleMode, DragCircleMode, DirectMode, SimpleSelectMode } from 'mapbox-gl-draw-circle';

// import DrawRectangle, { DrawStyles } from 'mapbox-gl-draw-rectangle-mode';  // 引入这个会报错（原因增加了）

import DrawRectangle, { DrawStyles, } from 'mapbox-gl-draw-rectangle-restrict-area';



@Injectable({
  providedIn: 'root'
})
export class MapDrawtoolsService {
  // 定义绘图工具变量
  private draw = null;
  constructor() {}
  // 获取绘制工具并执行绘制
  public getDrawTools(): MapboxDraw{
    this.draw = this.draw ? this.draw : new MapboxDraw({
      userProperties: true,
      displayControlsDefault: false,
      styles: DrawStyles,
      controls: {},
      modes: {
        ...MapboxDraw.modes,
        draw_rectangle: DrawRectangle,
        draw_circle  : CircleMode,
        drag_circle  : DragCircleMode,
        direct_select: DirectMode,
        simple_select: SimpleSelectMode
      }
    });
    return this.draw;
  }



  // 按照id：数组进行清空绘制;
  // tslint:disable-next-line: typedef
  clearById(ids){
    ids.forEach(element => {
      this.draw.delete(element);
    });
  }
  // 清空绘制
  // tslint:disable-next-line: typedef
  public resetDraw(map){
    if (this.draw){
      // console.log(this.draw.getAll());
       this.draw.deleteAll();
     //  console.log('draw', this.draw);
       map.removeControl(this.draw);
       this.draw = null;
     }
  }
}
