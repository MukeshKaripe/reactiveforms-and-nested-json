import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userdata:any;
  login!:FormGroup;

constructor(public router:Router){

}
  ngOnInit(): void {
    this.login = new FormGroup({
username:new FormControl(''),
password:new FormControl('')

    })

    console.log(localStorage.getItem('inputdata'));
    

this.userdata=JSON.parse(localStorage.getItem('inputdata')!);


  }
  

  





  loginMethod(){
    const tvalue = this.login.value;
    console.log(tvalue);
   
    for (let i = 0; i < this.userdata.length; i++) {
      const element = this.userdata[i];
      console.log(this.userdata[i]);
      
      if( element.username === tvalue.username &&  element.password === tvalue.password){


        this.router.navigate(['/home']);

      }
      else{
        alert('invalid input');
      }
      
    }
   
  }



}
