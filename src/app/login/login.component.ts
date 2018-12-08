import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../models/login.model';
import { getHostElement } from '@angular/core/src/render3';





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
ocultarPass:Boolean=false;
  ocultar(){
  this.ocultarPass = true;
  this.mostrarPass = true;
  let x = document.getElementById("pass");
  x.setAttribute('type', 'text');
  }
  mostrarPass:boolean=false;
mostrar(){
  this.ocultarPass = false;
  this.mostrarPass = false;
  let x = document.getElementById("pass");
  x.setAttribute('type', 'password');
}
  
  usuario = new User;
  
  error:boolean=false;
  loginIn:boolean=false;

  login(forma:NgForm) {

    this.usuario=forma.value;
     this.ser.isLogged(this.usuario)
     .subscribe(res=>{
       if (res  !== false ) {
         this.loginIn=true;
       setTimeout(()=>{
          localStorage.setItem('token', this.usuario.emailUser);
          localStorage.setItem('nombre', res.nombreUser);
          localStorage.setItem('idUser', res.idUser);
          localStorage.setItem('last', res.dataUpdate);
          this.ruta.navigate(['/dashboard']);
         
       },2000)
       
         
       }else{
         this.error=true;  
         setTimeout(()=>{
            this.error=false;
        },2500)
       }
       
     });
    
    // this.ruta.navigate(['./preload']);
    
  }

}
