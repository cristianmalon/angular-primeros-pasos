import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{MainPageComponent} from './pages/main.page.component'
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPageComponent,
    ListComponent,
    AddComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
