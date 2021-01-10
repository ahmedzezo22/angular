import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
       token=localStorage.getItem('token')
     
  constructor(private _user:UserService) { 
   
  }
 logOutMe(){
   this._user.logOut().subscribe(data=>{
     console.log(data)
     localStorage.removeItem('token')
    window.open('login','_self')
   })
 }

  ngOnInit(): void {
  }

}
