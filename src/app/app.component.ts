import { Component } from '@angular/core';

export class Equipo{
  id: number;
  nombre: string;
  ciudad: string;
  director: string;
}

@Component({
  selector: 'pagl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mis Equipos Favoritos';
  equipo: Equipo = {
    id:1,
    nombre:"america de cali",
    ciudad:"cali",
    director:"juanito"
  }
}
