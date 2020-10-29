import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-measure-tools',
  templateUrl: './measure-tools.component.html',
  styleUrls: ['./measure-tools.component.scss']
})
export class MeasureToolsComponent implements OnInit {

  @Input() mapboxmap = null;
  @Output() currentMeasure = new EventEmitter<any>();
  data = [
    {
      id: 'draw_line_string',
      title: '测距',
      measureType: 'length'
    },
    {
      id: 'draw_polygon',
      title: '测面',
      measureType: 'area'
    },
    {
      id: 'delete',
      title: '删除',
      measureType: ''
    },
  ];
  constructor() { }
  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  draw(e) {
      this.currentMeasure.emit(e);
  }
}
