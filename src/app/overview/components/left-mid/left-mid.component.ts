import { Component, OnInit, OnDestroy } from '@angular/core';

// 引入地图服务需要载入的包(必须要存在的四要素+css)
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// OSM一般也是必须要引入的。arcgis不一定
import TileArcGISRest from 'ol/source/TileArcGISRest';

@Component({
  selector: 'app-left-mid',
  templateUrl: './left-mid.component.html',
  styleUrls: ['./left-mid.component.scss']
})
export class LeftMidComponent implements OnInit, OnDestroy {

  data = '';
  subscriptions = [];
  constructor() { }

  ngOnInit() {
    postal
    .channel('SHOW_CHINNEL').
    subscribe('something_msg', (res: string) => {
      this.data = res;
    });
  }


  ngOnDestroy(){
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    })
  }
}
