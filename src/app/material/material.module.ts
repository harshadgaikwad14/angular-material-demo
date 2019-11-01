import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule } from '@angular/material'; // This module added for Button


const MatModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule
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
