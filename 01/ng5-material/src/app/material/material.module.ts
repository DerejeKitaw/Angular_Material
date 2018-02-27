import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule , MatCardModule} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule , MatCardModule
  ],
  exports: [
    FileUploadComponent, NavComponent, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule , MatCardModule
  ],
  declarations: [NavComponent, FileUploadComponent]
})
export class MaterialModule { }
