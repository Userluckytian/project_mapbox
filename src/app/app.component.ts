import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project9';
  constructor(private myServiceService: MyServiceService){
    this.myServiceService.getTitle().subscribe(res =>{
      console.log(res);
      this.title = res.data.list[0].id;
    });
  }
}
