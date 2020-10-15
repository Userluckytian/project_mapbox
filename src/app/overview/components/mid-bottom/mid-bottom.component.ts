import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-bottom',
  templateUrl: './mid-bottom.component.html',
  styleUrls: ['./mid-bottom.component.scss']
})
export class MidBottomComponent implements OnInit {
  arraylist = [0,1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
