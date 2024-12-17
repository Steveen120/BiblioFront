import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { UsuriosComponent } from './features/usurios/usurios.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ListaLibrosComponent } from './features/libros/lista-libros/lista-libros.component';
import { ListaLibrosPrestadosComponent } from './features/libros/lista-libros-prestados/lista-libros-prestados.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'usuarios', component: UsuriosComponent }, 
  { path: 'home', component: HomeComponent },
 
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'libros-disponibles', component: ListaLibrosComponent, canActivate: [AuthGuard] },
  { path: 'libros-prestados', component: ListaLibrosPrestadosComponent, canActivate: [AuthGuard] },
<<<<<<< HEAD
<<<<<<< HEAD
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/login' }
=======
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747
=======
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }