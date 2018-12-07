import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../models/login.model';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private ruta: Router,
    private ser: LoginService,
   

    ) { }

  ngOnInit() {
  }


  // recuperar contraseña
  recoverPass: boolean = false;

  recoverP(){ 
    this.recoverPass = true;
  }
  salir(){
    this.recoverPass = false;
  }

  correo:any
  recoverPassword(formaConfirmar: NgForm){
   
    this.correo = formaConfirmar.value.correo;

    console.log(this.correo);
    console.log(formaConfirmar);

    
  }
  // fin de recuperar contraseña
  
  usuario = new User;
  
  error:boolean=false;

  login(forma:NgForm) {

    this.usuario=forma.value;
     this.ser.isLogged(this.usuario)
     .subscribe(res=>{
      console.log(res);
      
    //res.
       if (res  !== false ) {
         localStorage.setItem('token', this.usuario.emailUser);
         localStorage.setItem('idUser', res.idUser);
         localStorage.setItem('last', res.lastVisit);
         this.ruta.navigate(['/dashboard']);
       
         
       }else{
        this.error=true;  
       }
       
     });
    
    // this.ruta.navigate(['./preload']);
    
  }

}
