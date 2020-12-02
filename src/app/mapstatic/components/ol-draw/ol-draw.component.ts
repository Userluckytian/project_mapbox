import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ol-draw',
  templateUrl: './ol-draw.component.html',
  styleUrls: ['./ol-draw.component.scss']
})
export class OlDrawComponent implements OnInit {

  data = [
    {
      id: 'RECTANGLE',
      title: '框选'
    },
    {
      id: 'Circle',
      title: '圆选'
    },
    {
      id: 'Polygon',
      title: '绘面'
    },
    {
      id: 'Point',
      title: '绘点'
    },
    {
      id: 'LineString',
      title: '绘线'
    }
  ];

  @Output() doDraw = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  // 执行绘制
  draw(e){
    this.doDraw.emit(e);
  }

}
