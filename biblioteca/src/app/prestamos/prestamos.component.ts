import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent {
  prestamoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.prestamoForm = this.fb.group({
      libroId: ['', Validators.required],
      personaId: ['', Validators.required],
      prestamoDate: ['', Validators.required],
      returnDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.prestamoForm.valid) {
      console.log('Préstamo registrado', this.prestamoForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
