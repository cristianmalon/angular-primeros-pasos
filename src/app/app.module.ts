import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeroComponent } from './Heroes/hero/hero.component';
// import { ListComponent } from './Heroes/list/list.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './Heroes/heroes.modules';
// import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,
    // ListComponent,
    //  CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
