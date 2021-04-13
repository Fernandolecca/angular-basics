import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
 

  @Input()
  nuevo: Character = {
    name: "",
    power: 0
  }

  constructor(
    private dbzService: DbzService
  ){}
  // @Output()
  // onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add(){
    if(this.nuevo.name.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.dbzService.addCharacter(this.nuevo);

    this.nuevo = {name: "", power: 0};

    
  }
}
