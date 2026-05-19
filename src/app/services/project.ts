import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(
    private readonly http: HttpClient
  ) { }

  private url_api = "https://amazonaws.com/v1/"

  listar_proyectos() {
    return this.http.get(this.url_api + "proyectos", {responseType: "json"})
  }

  obtener_proyecto(param: string) {
    return this.http.get(this.url_api + "proyecto?id_proyecto=" + param, {responseType: "json"})
  }
}
