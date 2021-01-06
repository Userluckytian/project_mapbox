import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-data',
  templateUrl: './multi-data.component.html',
  styleUrls: ['./multi-data.component.scss']
})
export class MultiDataComponent implements OnInit {
  mode = 'date';
  constructor() { }

  ngOnInit() {
  }

}
