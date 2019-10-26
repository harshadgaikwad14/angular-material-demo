import { NgModule } from '@angular/core';
import { MatButtonModule , MatButtonToggleModule , MatIconModule ,MatBadgeModule } from '@angular/material'; // This module added for Button


const MatButtonModules = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
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
