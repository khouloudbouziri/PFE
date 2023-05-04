import { Component, OnInit } from '@angular/core';
  import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
  import { Observable } from 'rxjs';
import { FileService } from '../services/file.service';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: [ './file.component.css']
})
export class FileComponent implements OnInit{
  
    selectedFile!: File;
    progress!: number;
    message!: string;
    files:any = [];
  file!: File;
  convert!: Promise<string>;
  fileData!: BlobPart;
 
  
    constructor(private http: HttpClient, private fileService:FileService) {}
  ngOnInit() {
    this.getFiles();
    console.log(this.getFiles());
    
  }
  
    onFileSelected(event:any) {
      this.selectedFile = event.target.files[0];
    }
  
    onUpload() {
      this.progress = 0;
  
      const formData = new FormData();
      formData.append('file', this.selectedFile);
  
      this.http.post('http://localhost:3333/api/v1/auth/uploadFile', formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          const percent = Math.round((100 * event.loaded) / event.total);
          console.log(`Uploaded ${percent}%`);
        }else if (event instanceof HttpResponse) {
          this.message = 'File uploaded successfully!';
        }
      });
    }
    getFiles() {
      this.http.get('http://localhost:3333/api/v1/auth/GetFile').subscribe(async (res:any)=> {this.files = res; 
      console.log(this.files)
      for (let index = 0; index < this.files.length; index++) {
        
        const blob = new Blob([this.files[index].file], { type: 'application/pdf' }); 
        const url = window.URL.createObjectURL(blob);
        window.open(url);
        this.files[index].fileName=url;
        console.log(url);
        
      }
     
    })

    }
    
    
  
  }
  