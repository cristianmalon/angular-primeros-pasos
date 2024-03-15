import { Injectable } from "@angular/core";
import { v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

//console.log(v4())
@Injectable({
  providedIn:'root'
})
export class DbzService{
  public characters:Character[]=[
    {
      id:uuid(),
      name:'Krilinaa',
      power:100 },
    {
      id:uuid(),
      name:'Goku',
      power:900 },
    {
      id:uuid(),
      name:'Vegeta',
      power:900 },
  ];

  addCharacter(character:Character):void{
    const newCharacter:Character={ id:uuid(),...character };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number){
  //   console.log('main page');
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.characters=this.characters.filter(character=>character.id!==id);
  }
}
