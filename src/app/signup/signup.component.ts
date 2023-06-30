import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formreactiveimp!:FormGroup;
userarrayinput:any[]=[];
  ngOnInit(): void {
    this.formreactiveimp = new FormGroup({
      username :new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      phonenumber :new FormControl('',[Validators.required, Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]),
      password:new FormControl('',Validators.required),
     java :new FormControl(''),
      python:new FormControl(''),
      
    })
  }
  onSubmit(){
    // console.log(this.formreactiveimp.value);
    this.userarrayinput.push(this.formreactiveimp.value) ;
  localStorage.setItem('inputdata',JSON.stringify(this.userarrayinput));
    
  }




}
