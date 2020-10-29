import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-draw-tools',
  templateUrl: './draw-tools.component.html',
  styleUrls: ['./draw-tools.component.scss']
})
export class DrawToolsComponent implements OnInit {

  @Input() mapboxmap = null;
  @Output() currentMode = new EventEmitter<any>();
  currentSelect = '';
  data = [
    {
      id: 'draw_rectangle',
      title: '框选',
    },
    {
      id: 'draw_circle',
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
    if (e.id !== this.currentSelect) {
      this.currentSelect = e.id;
      this.currentMode.emit(e);
    } else {
      this.currentSelect = '';
      return;
    }
  }

}
