import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { LoginService } from './services/login.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private ruta:Router,
    private se:LoginService
   
    ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      const correntUser = this.se.status;
      
      if (correntUser) {
        return true;
      }
      this.ruta.navigate(['/login'])
       return false;
      
      //  if (localStorage.getItem('key') == null) {
      //   this.ruta.navigate(['/login'])
      //   return false;
      // }else{
      // }
  }
}