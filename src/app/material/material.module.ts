import { NgModule } from '@angular/core';
import { MatButtonModule , MatButtonToggleModule , MatIconModule } from '@angular/material'; // This module added for Button


const MatButtonModules = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
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
