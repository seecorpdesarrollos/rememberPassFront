import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import {map, catchError} from "rxjs/operators";

 import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(
    private http:Http,
    
    ) { }
    
    
    
    url = environment.url+'Controllers/';
  
    isLogged(usuario){
  
    
    return this.http.post(this.url +"auth/login.php?id=getLogin" , usuario)
    .pipe(
      map((e)=> {
      
        return e.json()
      }),
      catchError((e)=> throwError(e))
      
      );
    
  }
   

}
