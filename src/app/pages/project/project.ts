import { Component, signal } from '@angular/core';
import { ProjectService } from '../../services/project';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  constructor(
    private readonly ps: ProjectService,
    private readonly ar: ActivatedRoute
  ) { }

  project = signal<any[]>([]);
  departamentos = signal<any[]>([]);
  
  __obtener_proyecto(id: string) {
    this.ps.obtener_proyecto(id).subscribe((rest: any) => {
      this.project.set(rest.data);
      if (rest.data[0].departamentos && rest.data[0].departamentos.length > 0) {
        this.departamentos.set(rest.data[0].departamentos);
      }
      console.log(this.project());
    })
  }
  ngOnInit(): void { 
    this.ar.params.subscribe((params: Params) => {
      this.__obtener_proyecto(params['id']);
    });
  }
}
