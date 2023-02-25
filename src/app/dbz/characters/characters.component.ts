import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  constructor(private dbzService: DbzService) {

  }

  get characteres() {
    return this.dbzService.characteres;
  }

}
