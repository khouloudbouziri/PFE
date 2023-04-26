import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  @Input() public ids :any;
  constructor(private httpClient: HttpClient,private route: ActivatedRoute
    ) { this.idE = this.route.snapshot.paramMap.get('id');}

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  imageUrl!: string;
  idE: any;
  showContent = true;

  toggleContent() {
    this.showContent = !this.showContent;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
     //Select File
     this.selectedFile = event.target.files[0];
     this.imageUrl = URL.createObjectURL(this.selectedFile);
     this.onUpload();
     this.getImage();
    }
    
    
    //Gets called when the user clicks on submit to upload the image
    onUpload() {
      console.log(this.selectedFile);
      
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      uploadImageData.append('id', this.idE);
      //Make a call to the Spring Boot Application to save the image
      this.httpClient.post('http://localhost:3333/api/v1/auth/image/upload' , uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            console.log(this.idE);
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
        );
  
    }
    
  
      //Gets called when the user clicks on retieve image button to get the image from back end
      getImage() {//Make a call to Sprinf Boot to get the Image Bytes.
        this.httpClient.get('http://localhost:3333/api/v1/auth/image/get/'+ this.idE )
          .subscribe(
            res => {
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
              if(this.retrievedImage!=null){
                this.toggleContent() ;
              }
            }
          );
      }
       //Gets called when the user clicks on retieve image button to get the image from back end
       getImageCart() {//Make a call to Sprinf Boot to get the Image Bytes.
        this.httpClient.get('http://localhost:3333/api/v1/auth/image/get/'+ this.ids )
          .subscribe(
            res => {
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
              if(this.retrievedImage!=null){
                this.showContent = false;
                console.log("hhhhhhhhhh");
              }
            }
          );
      }
     
     
      ngOnInit() {
        this.getImage(); 
        this.getImageCart(); 
       }
      
}
