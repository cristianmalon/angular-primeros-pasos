import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string='Spiderman';
  public age:number=45;

  get capitalizedName():string{
    return this.name.toLocaleUpperCase();

  }

  getHeroDescription():string{

    return `${this.name}-${this.age}`;
  }
  public CambiarNombre():void{
    this.name ='batman'
  }

changeHero():void{
this.name='linterna verde'
}
changeAge():void{
this.age=111
}

resetForm():void{
  this.name='Spiderman'
  this.age=45;

  // document.querySelectorAll('h1').forEach(element =>{
  //   element.innerHTML='<h1>Desde Angular</h1>'
  // })

}

}
