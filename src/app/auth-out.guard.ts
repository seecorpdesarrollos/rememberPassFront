import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthOutGuard implements CanActivate {
  constructor(
    private ruta:Router,
    private auth: LoginService
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

     
      
      if (localStorage.getItem('token') === null) {
        return true;
      }else{
        this.ruta.navigate(['/login'])
        return false;
      }
  }
}
