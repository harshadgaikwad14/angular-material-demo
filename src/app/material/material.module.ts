import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material'; // This module added for Button


const MatButtonModules = [
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    MatButtonModules
  ],
  exports: [
    MatButtonModules
  ]
})
export class MaterialModule { }
