import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PreloadComponent } from './components/preload/preload.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './components/pages.component';


const appRoutes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [

      { path: 'dashboard', component: DashboardComponent},
      { path: 'preload', component: PreloadComponent},
      { path: 'preload', component: PreloadComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', component: NopagefoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true } );
