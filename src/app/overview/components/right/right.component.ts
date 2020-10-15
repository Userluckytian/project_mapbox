import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Chart } from '@antv/g2';
import * as G2 from '@antv/g2';


@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 },
    ];
    const chart = new G2.Chart({
      container: 'c1',
      autoFit: true,
      width: 428,
      height: 262
    });
    
    chart.data(data);
    chart.scale('sales', {
    });
    
    chart.tooltip({
      showMarkers: false
    });
    chart.interaction('active-region');
    
    chart.interval().position('year*sales');
    
    chart.render();
  }
  

}
