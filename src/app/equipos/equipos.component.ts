import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
@Component({
  selector: 'pagl-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipo: Equipo = {
    id:1,
    nombre:"america de cali",
    ciudad:"cali",
    director:"juanito"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
