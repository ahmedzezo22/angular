import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register=new FormGroup({
  name:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required]),
  gender:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required,Validators.minLength(11)]),
    age:new FormControl("",[Validators.required])
})
  constructor(private _user:UserService,private _router:Router) { }

  ngOnInit(): void {
  }
  msg:string=""
 
  registerUser(){
    this._user.registerUser(this.register.value).subscribe((data) =>{
        console.log(data);

        if(data.status==1){
          this.msg=data.message
          localStorage.setItem('token',`${data.data.token_type} ${data.data.token}`)
          setTimeout(()=>{
            // this._router.navigateByUrl("/")
            window.open('/','_self')
           },3000)
        }else if(data.status==0){
          this.msg=data.message
        }else if(data.user.age<16){
          this.msg="your age must be greater than 16"
        }
      },()=>{
        //problem
        console.log('ay 7aga byza')
      }
        ,()=>{
          //done
          console.log('ay 7aga')
        
        })
    }
    


}
