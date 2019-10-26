import { NgModule } from '@angular/core';
import { MatButtonModule , MatIconModule , MatProgressSpinnerModule } from '@angular/material'; // This module added for Button


const MatModules = [
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule
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
