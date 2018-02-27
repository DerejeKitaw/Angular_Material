import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
selectedFile = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onFileSelected(event) {
    // console.log(event);
    this.selectedFile = event.target.file[0];
  }
  // onUpload(){
  //   this.http.post('')
  // }
}
