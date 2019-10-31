import { NgModule } from '@angular/core';
import { MatButtonModule , MatIconModule , MatCardModule } from '@angular/material'; // This module added for Button


const MatModules = [
  MatButtonModule,
  MatIconModule,
  MatCardModule
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
