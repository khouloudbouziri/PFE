import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: [ './file.component.css']
})
export class FileComponent implements OnInit{
  fileInfos!: any[];
  message!: string;
  files!: any[];
  selectedFile: any;


  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.getFiles();
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    console.log("onfileselected");


  }

  onUpload() {
    this.fileService.upload(this.selectedFile).subscribe(
      event => {
        console.log(event);
        console.log("event");

        this.selectedFile = null;
        this.getFiles();
      },
      err => {
        console.log(err);
      }
    );
  }

  getFiles() {
    this.fileService.getFiles().subscribe(
      data => {
        this.fileInfos = data;
        console.log(this.fileInfos);
      },
      err => {
        console.log(err);
      }
    );
  }

  onDownload(id: string) {
    this.fileService.downloadFile(id).subscribe(
      data => {
        const blob = new Blob([data], { type: data.type });
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        console.log("url");

        window.open(url);
      },
      err => {
        console.log(err);
      }
    );
  }
  









}
