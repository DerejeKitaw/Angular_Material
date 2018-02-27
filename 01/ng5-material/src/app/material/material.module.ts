import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule , MatCardModule} from '@angular/material';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule , MatCardModule
  ],
  exports: [
    NavComponent, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule , MatCardModule
  ],
  declarations: [NavComponent]
})
export class MaterialModule { }
