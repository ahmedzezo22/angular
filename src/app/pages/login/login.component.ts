import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModal = {
    email:"",
    password:"",
    type: 1,
    token:""
  }
  loginflag = true
  constructor(private _user:UserService, private router:Router) { 
    
  }
  msg:string=""

  ngOnInit(): void {
  }
onLoginSubmit(){
  console.log(this.userModal)  
  this._user.sign(this.userModal).subscribe((data)=>{
    localStorage.setItem('token',`${data.data['token_type']} ${data.data['token']}`)
   if(data.status==1){
    localStorage.setItem('token',`${data.data['token_type']} ${data.data['token']}`)
  
     this.msg=data.message
     setTimeout(()=>{
      // this.router.navigateByUrl("/")
      window.open('/','_self')
     },3000)
   }else if(data.status==0){
     this.msg=data.message
     setTimeout(()=>{
      this.router.navigateByUrl("/register")
     },3000)
    
   }
  },()=>{
    //problem
    console.log('ay 7aga byza')
  }
    ,()=>{
      //done
      console.log('ay 7aga')
      
      //this.router.navigateByUrl("/")
    })
}
}
