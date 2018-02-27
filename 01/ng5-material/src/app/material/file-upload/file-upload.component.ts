import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
selectedFile = null;
  constructor() { }

  ngOnInit() {
  }
  onFileSelected(event) {
    // console.log(event);
    this.selectedFile = event.target.file[0];
  }
}
