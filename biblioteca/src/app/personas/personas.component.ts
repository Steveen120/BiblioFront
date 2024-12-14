import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personas',
  standalone: true,
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  personaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personaForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.personaForm.valid) {
      console.log('Persona agregada', this.personaForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
