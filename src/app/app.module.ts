import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { MyServiceService } from './my-service.service';
import { CoreModule, StartupService, ResourceMetaInfoService, DefaultInterceptor } from '@cmss/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// tslint:disable-next-line: typedef
export function StartupServiceFactory(startupService: StartupService) {
  return () =>
    startupService.loadRootConfig('./assets/config/root.config.json');
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    MyServiceService,
    ResourceMetaInfoService,
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
