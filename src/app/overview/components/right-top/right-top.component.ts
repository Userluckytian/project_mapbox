import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-top',
  templateUrl: './right-top.component.html',
  styleUrls: ['./right-top.component.scss']
})
export class RightTopComponent implements OnInit {

  array = [0,1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit() {
  }

}
