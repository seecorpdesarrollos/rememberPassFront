import { Component, OnInit, ViewChild, ElementRef, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../models/login.model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
// hacemos referencia a un elementeo html en concreto.
  @ViewChild('emailUserFocus') emailUserFocus: ElementRef;



  constructor(
    private ruta: Router,
    private ser: LoginService,
  
    ) { }
  ngOnInit() {
    //inicilizamos la funcion y dejamos que see cree el @ViewChild(), para poder ejecutarlo.con un 1 segundo.dvcsv c c 
    setTimeout(()=>{
      this.emailUserFocus.nativeElement.focus();
   
    },1000)
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
  let changeAttr = document.getElementById("pass");
  changeAttr.setAttribute('type', 'text');
  }
  mostrarPass:boolean=false;
mostrar(){
  this.ocultarPass = false;
  this.mostrarPass = false;
  let changeAttr = document.getElementById("pass");
  changeAttr.setAttribute('type', 'password');
}
  
 
  usuario = new User;
  error:boolean=false;
  loginIn:boolean=false;
  alerta:boolean=false;
  // declaro una constante global para utilizarla en todos los componentes.
  public  static EMAIL;
  login(forma:NgForm) {

    this.usuario=forma.value;
    
     this.ser.isLogged(this.usuario)
     .subscribe(res=>{
      console.log(res);
      
      if(res == 403){
        this.alerta= true;
        setTimeout(()=>{
          this.alerta=false;
        },2500);
      }else{

        if (res  !== false && res !== 403) {
        
          this.loginIn=true;
        setTimeout(()=>{
           localStorage.setItem('token', this.usuario.emailUser);
           localStorage.setItem('nombre', res.nameUser);
           localStorage.setItem('idUser', res.idUser);
           localStorage.setItem('last', res.dataUpdate);
           localStorage.setItem('key', res[8]);
           this.ruta.navigate(['/dashboard']);
        },2000);
        }else{
          this.error=true;  
          setTimeout(()=>{
             this.error=false;
         },2500)
        }
      }
       
     });
    
  }



}
