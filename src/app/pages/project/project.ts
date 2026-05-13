import { Component } from '@angular/core';
import { ProjectService } from '../../services/project';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  constructor(
    private readonly ps: ProjectService,
    private readonly ar: ActivatedRoute
  ) { }

  project: any[] = [];
  
  __obtener_proyecto(id: string) {
    this.ps.obtener_proyecto(id).subscribe((rest: any) => {
      this.project = rest.data;
      console.log(this.project);
    })
  }
  ngOnInit(): void { 
    this.ar.params.subscribe((params: Params) => {
      this.__obtener_proyecto(params['id']);
    });
  }
}
