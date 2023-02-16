import { Component } from '@angular/core';

@Component({
    selector: 'app-count',
    template: `<h1>{{title}}</h1>
<h3>La base es:<strong>{{base}}</strong></h3>

<button (click)="accumulate(base)">+{{base}}</button>
<span>{{number}}</span>
<button (click)="accumulate(-base)">-{{base}}</button>`
})
export class CountComponent {
    base: number = 5;
    title = 'Contador';
    number: number = 10;
    accumulate(value: number) {
        this.number += value;
    }
}