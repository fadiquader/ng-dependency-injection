import { Component } from '@angular/core';
import {LogService} from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(logService: LogService) {
    // Create an _injector_ and ask for it to resolve and create a LogService
    // const injector: any = Injector.create([{provide: LogService, useClass: LogService}]);
    // use the injector to **get the instance** of the LogService
    // this.logService = injector.get(LogService);
  }
}
