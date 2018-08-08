import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import {LogService} from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://my.api.com/v1' },
    {
      provide: LogService,
      useFactory() {
        const currentDate = new Date();
        return new LogService(currentDate);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
