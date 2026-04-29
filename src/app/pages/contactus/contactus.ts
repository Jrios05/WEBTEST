import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [ReactiveFormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  constructor(
    private fb: FormBuilder
  ){}

  contactusForm = this.fb.group({
    nombre:["", [Validators.required]],
    apellido: ["" ,[Validators.required]],
    correo:["", Validators.required],
    mensaje:["", Validators.required]
  })

get apellidoInvalido (){
  return this.contactusForm.get("apellido")?.invalid && this.contactusForm.get("apellido")?.touched
  // para que el mensaje salga al dar clic y este vacio  
}

  submit(){
  if(this.contactusForm.valid){
    console.log(this.contactusForm.value);
    }
  else {
    alert("Por favor, complete todos los campos correctamente");
  }
  }
}
