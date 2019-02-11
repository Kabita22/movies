import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/user.service';
import { user } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged:boolean=false;
  users:user[];
  loginForm: FormGroup;
  username:string;
  password: string;
  flag:number=0;
  

  constructor(private router:Router, private formBuilder: FormBuilder, private userService: UsersService) { }

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
        sessionStorage.setItem('username', this.username);
        console.log("logged in");
        this.router.navigate['/moviesList'];
        this.flag=1;
        break;
        // console.log("hii");
      }
    }
    if(this.flag==0){
      this.logged=true;
    }
    
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
