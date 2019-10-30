import { NgModule } from '@angular/core';
import { MatButtonModule , MatIconModule , MatListModule, MatDividerModule } from '@angular/material'; // This module added for Button


const MatModules = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatDividerModule
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
