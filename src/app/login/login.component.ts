import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private ruta: Router,
    private ser: LoginService

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
  
  
  email:any;
  password:any;
  recuerdame:any
  login(forma:NgForm) {
    
    this.email = forma.value.email;
    this.password = forma.value.password;
    this.recuerdame = forma.value.recuerdame;
    
     this.ser.isLogged(this.email, this.password)
     .subscribe(res=>{
       console.log(res);
       
     })
    
    localStorage.setItem('token', this.email);
    this.ruta.navigate(['/dashboard']);
    // this.ruta.navigate(['./preload']);
  }

}
