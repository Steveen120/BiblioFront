import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Components
import { HomeComponent } from './features/home/home.component';
import { UsuriosComponent } from './features/usurios/usurios.component';
import { LoginComponent } from './features/auth/login/login.component';
import { LibrosComponent } from './features/libros/libros.component';
import { PrestamosComponent } from './features/prestamos/prestamos.component';
import { RegisterComponent } from './features/auth/register/register.component';
// Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,      
    LibrosComponent,
    PrestamosComponent,
    HomeComponent,
    UsuriosComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
