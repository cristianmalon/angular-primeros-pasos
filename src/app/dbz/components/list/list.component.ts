import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',

})
export class ListComponent {

@Input()
public characterList:Character[]=[
  {name:'Trunks',power:10},
  {name:'Trunks',power:10},
  {name:'Trunks',power:10},
]

@Output()
public onDelete:EventEmitter<string>=new EventEmitter();

// onDeleteCharactere(index:number):void{
//   this.onDelete.emit(index);
// }

deleteCharacterById(id?:string){
  // this.characters=this.characters.filter(character=>character.id!==id);
  if(!id)return;
this.onDelete.emit(id);
}

}
