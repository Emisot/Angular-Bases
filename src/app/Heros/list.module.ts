import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
//hola mundo
@NgModule({
  exports: [
    HeroComponent,
    ListComponent

  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Herocomponent {

 }

