import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './Counter/counter.module';
import { Herocomponent } from './Heros/list.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    Herocomponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
