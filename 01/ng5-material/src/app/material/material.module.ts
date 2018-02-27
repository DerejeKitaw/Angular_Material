import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatToolbarModule
  ],
  exports: [
    NavComponent, MatButtonModule, MatToolbarModule
  ],
  declarations: [NavComponent]
})
export class MaterialModule { }
