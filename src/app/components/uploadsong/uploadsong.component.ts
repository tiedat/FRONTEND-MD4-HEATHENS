import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-uploadsong',
  templateUrl: './uploadsong.component.html',
  styleUrls: ['./uploadsong.component.scss']
})
export class UploadsongComponent implements OnInit {
  uploadedFiles: Array < File > ;
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }
  upload() {
    const formData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('/api/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      });
  }
}
