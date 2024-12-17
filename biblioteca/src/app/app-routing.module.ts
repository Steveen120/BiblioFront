import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LibrosComponent } from './features/libros/libros.component';
import { PrestamosComponent } from './features/prestamos/prestamos.component';
import { UsuriosComponent } from './features/usurios/usurios.component';
import { HomeComponent } from './features/home/home.component';
//import { AuthGuard } from './core/guards/auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'usuarios', component: UsuriosComponent },  
  { path: 'home', component: HomeComponent },
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'libros', component: LibrosComponent },
  { path: 'prestamos', component: PrestamosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }