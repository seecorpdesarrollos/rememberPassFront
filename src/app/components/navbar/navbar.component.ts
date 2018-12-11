import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/login.model';


declare var $;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private ruta:Router) { }

  ngOnInit() {
    this.dataUser();
  }

  user = new User;
  dataUser(){   
   this.user.nameUser= localStorage.getItem('nombre');
   this.user.emailUser= localStorage.getItem('token'); 

  }

  logout(){
   
      $('#logout').modal( { backdrop: 'static', keyboard: false} , 'show');
     setTimeout(()=>{
       $('#logout').modal('hide');
        localStorage.clear();
        this.ruta.navigate(['login']);
        
      },2500)
      

  }

}
