import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-usurios',
  standalone: false,
  
  templateUrl: './usurios.component.html',
  styleUrl: './usurios.component.css'
})
export class UsuriosComponent implements OnInit{
  usuarios: any[] = []; 
  
  constructor (private userService: UserService){}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.usuarios = data; 
      
      },
      error: (error) => {
        console.log('Error al obtener', error )
      }
    })
  }

  eliminarUsuario (id: number):void {
    this.userService.deleteUser(id).subscribe({
      next: ()=> {
        this.usuarios=this.usuarios.filter((u) => u.id !== id);
      }, 
      error: (error) => {
        console.log('Error al obtener', error )
      }
    })
  }

}
