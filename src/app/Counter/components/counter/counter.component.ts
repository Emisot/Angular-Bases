import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola mundo</h1>
  <hr>
  <h2>Counter : {{counter}}</h2>

<button (click)="aumenta(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="decrementa(1)">-1</button>
`
})

export class CounterComponet  {
  public title:string = 'Hola mundo';
  public counter:number = 10;


 aumenta(value:number):void{
  this.counter += value;


 }
 decrementa(value2:number):void{
  this.counter -=value2;
 }

 reset():void{
     this.counter=10
 }
}
