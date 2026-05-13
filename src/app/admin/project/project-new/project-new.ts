import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../../../services/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-new',
  imports: [ReactiveFormsModule],
  templateUrl: './project-new.html',
  styleUrl: './project-new.css',
})
export class ProjectNew {
  constructor(
    private fb: FormBuilder,
    private readonly ps: ProjectService,
    private router: Router
  ) {}

  projectForm = this.fb.group({
    idProyecto: [""],
    nombre: ["", [Validators.required]],
    precio: [0.0, [Validators.required]],
    direccion: ["", [Validators.required]],
    ubicacion: ["", [Validators.required]],
    imagenNombre: ["", [Validators.required]],
    imagenRuta: ["", [Validators.required]],
    usuarioCrea: [1]
  });

  __insertar_proyecto(data: any) {
    this.ps.insertar_proyecto(data).subscribe((rest: any) => {
      alert(rest.msg);
      this.router.navigate(['home']);
    });
  }

  __onSubmit() {
    if (this.projectForm.valid) {
      this.__insertar_proyecto(this.projectForm.value);
    } else {
      alert("Por favor, complete todos los campos requeridos.");
    }
  }
}
