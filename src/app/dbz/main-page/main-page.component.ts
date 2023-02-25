import { Component } from '@angular/core';
import { Character } from '../interface/idbz.nterface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {

  }

  newCharacter: Character = {
    name: 'Roshi',
    power: 1000
  }

}
