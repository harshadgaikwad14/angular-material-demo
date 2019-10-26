import { NgModule } from '@angular/core';
import { MatButtonModule , MatButtonToggleModule } from '@angular/material'; // This module added for Button


const MatButtonModules = [
  MatButtonModule,
  MatButtonToggleModule
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
