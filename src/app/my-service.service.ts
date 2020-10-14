import { Injectable } from '@angular/core';
import { ModuleDataRxInquireService } from '@cmss/core';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

constructor(private dataRxInquireService: ModuleDataRxInquireService) { }

// tslint:disable-next-line: typedef
public getTitle(){
  return this.dataRxInquireService.get('common', 'location.list', null, null);
}

}
