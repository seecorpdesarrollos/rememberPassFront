import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import {map} from "rxjs/operators";
import { Observable,BehaviorSubject } from 'rxjs';
import { User } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
   private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
  constructor(
    private http:Http,
    
    ) { 
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('key')));
      this.currentUser = this.currentUserSubject.asObservable();
    }
    
    public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

    
    
    url = environment.url+'Controllers/';
  status:boolean=false;
    isLogged(usuario): Observable<any>{
    return this.http.post(this.url +"auth/login.php?id=getLogin" , usuario)
    .pipe(
      map((e)=> {
        console.log(e.json());
        
        return e.json()
      }));
    
  }

 



   

}
