import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project9';
  data = [{
    route: 'overview',
    outlet: 'overview'
  },
  {
    route: 'mapquery',
    outlet: 'boxmap'
  },
  {
    route: 'mapstatic',
    outlet: 'boxmap'
  }];

  constructor(private router: Router) { }
  // tslint:disable-next-line: typedef
  routerTo(index) {
    const navTo = './' + this.data[index].route;
    this.router.navigate([navTo], {
      queryParams: {
        id: index
      },
    });
  }

}
