import { Component, Input } from '@angular/core';
import { Character } from '../interface/idbz.nterface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html'
})
export class FormAddComponent {

  @Input() new!: Character;

  constructor(private dbzService: DbzService) {

  }

  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }

    this.dbzService.addCharacter(this.new);

    this.new = {
      name: '',
      power: 0
    }

  }
}
