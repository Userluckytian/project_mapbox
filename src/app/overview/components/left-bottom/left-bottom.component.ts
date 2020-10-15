import { Component, OnInit } from '@angular/core';
// 引入数据请求服务
import { ModuleDataRxInquireService } from '@cmss/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-left-bottom',
  templateUrl: './left-bottom.component.html',
  styleUrls: ['./left-bottom.component.scss']
})
export class LeftBottomComponent implements OnInit {
  data = '';
  // constructor(private dataRxInquireService: ModuleDataRxInquireService) { }
  constructor(public http: HttpClient) { }

  ngOnInit() {
    // this.dataRxInquireService.get('common', 'location.list', null, null).subscribe(res => {
    //   this.data = res;
    // });
    var api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe(response => { console.log(response); });
  }

  showMsg() {
    const msg = 'hello postal!';
    postal
      .channel('SHOW_CHINNEL')
      .publish('something_msg', msg);
  }
}
