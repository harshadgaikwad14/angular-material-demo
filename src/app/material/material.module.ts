import { NgModule } from '@angular/core';
import { MatButtonModule , MatIconModule , MatGridListModule } from '@angular/material'; // This module added for Button


const MatModules = [
  MatButtonModule,
  MatIconModule,
  MatGridListModule
];

@NgModule({
  declarations: [],
  imports: [
    MatModules
  ],
  exports: [
    MatModules
  ]
})
export class MaterialModule { }
