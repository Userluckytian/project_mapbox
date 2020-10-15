import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-up',
  templateUrl: './left-up.component.html',
  styleUrls: ['./left-up.component.scss']
})
export class LeftUpComponent implements OnInit {
  person=[1,2,3,4]
  constructor() { }

  ngOnInit() {
  }

}
