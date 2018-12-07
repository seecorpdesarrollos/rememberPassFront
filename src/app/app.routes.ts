import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PreloadComponent } from './components/preload/preload.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './components/pages.component';
import { RegisterComponent } from './login/register.component';
import { AuthGuard } from './auth.guard';
import { AuthOutGuard } from './auth-out.guard';


const appRoutes: Routes = [
  {
    path: '', component: PagesComponent , canActivate:[AuthGuard],
    children: [

      { path: 'dashboard', component: DashboardComponent},
      { path: 'preload', component: PreloadComponent},
      { path: 'preload', component: PreloadComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  { path: 'login', component: LoginComponent , canActivate:[AuthOutGuard]},
  { path: 'register', component: RegisterComponent , canActivate:[AuthOutGuard]},
  { path: '**', component: NopagefoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true } );
