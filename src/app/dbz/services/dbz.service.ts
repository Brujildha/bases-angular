import { Injectable } from "@angular/core";
import { Character } from '../interface/idbz.nterface';

@Injectable()
export class DbzService {
    constructor() {

    }

    get characteres(): Character[] {
        return [...this._characteres];
    }

    private _characteres: Character[] = [
        {
            name: 'Goku',
            power: 10000
        },
        {
            name: 'Vegeta',
            power: 20000
        }
    ];
    addCharacter(character: Character) {
        this._characteres.push(character);
    }

}