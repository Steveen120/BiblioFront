import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-libros',
  standalone: true,
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.libroForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      genre: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.libroForm.valid) {
      console.log('Libro agregado', this.libroForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
