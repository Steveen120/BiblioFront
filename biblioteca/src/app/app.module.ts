import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Components
import { HomeComponent } from './features/home/home.component';
import { UsuriosComponent } from './features/usurios/usurios.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
// Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaLibrosComponent } from './features/libros/lista-libros/lista-libros.component';
import { ListaLibrosPrestadosComponent } from './features/libros/lista-libros-prestados/lista-libros-prestados.component';
import { LibrosAdmComponent } from './libros-adm/libros-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,      
    HomeComponent,
    UsuriosComponent,
    RegisterComponent,
    ListaLibrosComponent,
    ListaLibrosPrestadosComponent,
    LibrosAdmComponent
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