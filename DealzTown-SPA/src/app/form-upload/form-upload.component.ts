import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../_models/FileUpload';
import { UploadFileService } from '../_services/upload-file.service';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {}

  selectFile(event) {
    console.log(event);
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }
}
