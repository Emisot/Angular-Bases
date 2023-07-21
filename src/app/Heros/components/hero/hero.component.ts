import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'Iroman';
  public  age:number = 45;
  get capitalizedName():string{
    return this.name.toUpperCase()
  }

   getHerodescription():string{
      return `${this.name} - ${this.age}`
  }


  othername():void{
    this.name = 'SpiderMan';
  }
  otherage():void{
    this.age=17;

  }
  reset():void{
    this.name = 'Iroman',
    this.age = 45
  }



}


