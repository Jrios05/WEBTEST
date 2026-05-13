import { Component, signal } from '@angular/core';
import { ProjectService } from '../../services/project';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    private readonly ps: ProjectService
  ) { }

  projects = signal<any[]>([]);

  __listar_proyectos() {
    this.ps.listar_proyectos().subscribe((rest: any) => {
      this.projects.set(rest.data);
      // console.log(this.projects())
    })
  }

  ngOnInit(): void {
    this.__listar_proyectos();
  }
}