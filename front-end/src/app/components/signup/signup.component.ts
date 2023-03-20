import { Component } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import{FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Status } from 'src/app/models/status';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private signupService:SignupService,private fb:FormBuilder){

  }
  frm!:FormGroup;
  status!:Status;

  get f(){
    return this.frm.controls;
  }

  OnPost(){
  this.status={statusCode:0,message:"wait..."};
  this.signupService.signup(this.frm.value).subscribe({
    next: (res)=>{
      console.log(res);
      this.status=res;
      this.frm.reset();
    },
    error:(err)=>{
      this.status.message="some erreor on server side";
      console.log(err);
    },
    complete:()=>{

    }
  })
  }
  ngOnInit():void{
    this.frm=this.fb.group({
      'firstname':['',Validators.required],
      'lastname':['',Validators.required],
    'Email':['',Validators.required],
    'password':['',Validators.required],
    'university':['',Validators.required],
    'universityDept':['',Validators.required]
    })

  }

}
