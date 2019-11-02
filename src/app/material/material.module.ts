import { NgModule } from '@angular/core';
import { MatButtonModule , MatIconModule , MatMenuModule } from '@angular/material'; // This module added for Button


const MatModules = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule
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
