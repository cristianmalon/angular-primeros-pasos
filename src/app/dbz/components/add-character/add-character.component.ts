import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  //template:'<p>asdsad</p>'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character>=new EventEmitter();

  public character:Character={
    name:'default',
    power:0
  }


emitCharacter():void{
  console.log(this.character)
  if(this.character.name.length===0) return;

  this.onNewCharacter.emit(this.character);

  // this.character={name:'otro',power:2}
  // this.character.name="otro";
  // this.character.power=1;
}
}

