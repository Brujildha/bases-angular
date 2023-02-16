import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountComponent } from './count/count.component';



@NgModule({
    declarations: [
        CountComponent
    ],
    exports: [
        CountComponent
    ],
    imports: [
        CommonModule
    ]
})

export class CountModule {

}