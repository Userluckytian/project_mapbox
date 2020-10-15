import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModuleDataRxInquireService } from '@cmss/core';
import { BoxmapService } from './boxmap.service';


@Component({
  selector: 'app-boxmap',
  templateUrl: './boxmap.component.html',
  styleUrls: ['./boxmap.component.scss']
})
export class BoxmapComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private mapService: BoxmapService,
    // private dataRxInquireService: ModuleDataRxInquireService
  ) { }

  ngOnInit() {
    this.mapService.init();
  }

}
