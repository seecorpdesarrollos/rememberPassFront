import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
     private http:Http,
   
     ) { }
 
 

  loguiIn:boolean = false;
  isLogged(email, password){
    const url = environment.url+'?id=token';
    return this.http.post(url,{ email:'email' , password: 'password'})
     .pipe(res =>{
       return res;
     })
  }
   

}
