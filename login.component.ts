import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { user } from 'src/app/interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username:String;
  password: string;
  users: user[];
  logged:boolean=false;

  constructor(private routerObj: Router,private formBuilder: FormBuilder, private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(usr=>this.users=usr);
    this.loginForm = this.formBuilder.group({
      userName:['',{updateOn: 'blur', validators: [Validators.required]} ],
      password: ['',{validators: [Validators.required, validatePwd]}]
  });
  }

  onSubmit(){
    this.username=this.loginForm.get('userName').value;
    this.password=this.loginForm.get('password').value;
    for(let usr of this.users){
      if(usr.username== this.username && usr.password == this.password){
        this.routerObj.navigate['/moviesList'];
      }
    }
    this.logged=true;
  }
}

function  validatePwd(pwd:FormControl) {
  var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return regularExpression.test(pwd.value) ? null : {
    pwdValid: {
      valid: false
  }
  };
}