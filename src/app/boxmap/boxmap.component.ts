import { Component, OnInit } from '@angular/core';
import { BoxmapService } from './boxmap.service';


@Component({
  selector: 'app-boxmap',
  templateUrl: './boxmap.component.html',
  styleUrls: ['./boxmap.component.scss']
})
export class BoxmapComponent implements OnInit {

  constructor(
    private mapService: BoxmapService,
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.mapService.init();
  }

}
