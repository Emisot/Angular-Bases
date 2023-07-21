import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[]=['Thor','Iroman', 'Capitan', 'Hulk','Black Panter'];
  public deleteHero?:string;


  removelashero():void{
    this.deleteHero =this.heroNames.pop();


  }
}

