import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-draw-tools',
  templateUrl: './draw-tools.component.html',
  styleUrls: ['./draw-tools.component.scss']
})
export class DrawToolsComponent implements OnInit {

  @Input() mapboxmap = null;
  @Output() currentMode = new EventEmitter<any>();
  data = [
    {
      id: 'draw_rectangle',
      title: '框选',
    },
    {
      id: 'drag_circle',
      title: '圆选',
    },
    {
      id: 'draw_polygon',
      title: '多边',
    },
  ];
  constructor() { }
  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  draw(e) {
      this.currentMode.emit(e);
  }
}
