import { NgModule } from '@angular/core';
import { MatButtonModule , MatIconModule , MatFormFieldModule, MatSelectModule } from '@angular/material'; // This module added for Button


const MatModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule
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
