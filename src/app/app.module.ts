import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
