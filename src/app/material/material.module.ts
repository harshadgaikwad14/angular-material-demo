import { NgModule } from '@angular/core';
import { MatButtonModule , MatIconModule , MatSidenavModule } from '@angular/material'; // This module added for Button


const MatModules = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule
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
