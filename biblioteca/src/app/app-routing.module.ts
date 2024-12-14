import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LibrosComponent } from './libros/libros.component';
import { PersonasComponent } from './personas/personas.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { RegisterComponent } from './register/register.component'; 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },  
  { path: 'libros', component: LibrosComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'prestamos', component: PrestamosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
