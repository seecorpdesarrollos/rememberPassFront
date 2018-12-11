import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// rutas
import { APP_ROUTES } from './app.routes';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SiderMenuComponent } from './components/sider-menu/sider-menu.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreloadComponent } from './components/preload/preload.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PagesComponent } from './components/pages.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './login/register.component';
import { AuthOutGuard } from './auth-out.guard';
import { AuthGuard } from './auth.guard';
import { LoginService } from './services/login.service';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SiderMenuComponent,
    NopagefoundComponent,
    DashboardComponent,
    PreloadComponent,
    BreadcrumbComponent,
    PagesComponent,
    FooterComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [
    AuthOutGuard,
    AuthGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
