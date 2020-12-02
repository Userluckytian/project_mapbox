import { Injectable } from '@angular/core';


import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZSource from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';


@Injectable({
  providedIn: 'root'
})
export class MapstaticService {

  constructor() { 
    console.log('我执行了constor');
  }

  init(){
    console.log('我执行了init');
  }

  // 构建openlayers地图
  // tslint:disable-next-line: typedef
  createOlMap(id: string) {
    return new Map({
      target: id,
      layers: [
        new TileLayer({
          source: new XYZSource({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
          })
        })
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2
      })
    });
  }


}
