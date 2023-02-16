import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Ironman', 'Superman'];
  heroedeleted: string[] = [];
  deleteHeroe() {
    this.heroedeleted = this.heroes.splice(this.heroes.length - 1) || [];

  }
}

