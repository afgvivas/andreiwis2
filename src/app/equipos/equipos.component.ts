import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EQUIPOS } from '../lista-equipos';

@Component({
  selector: 'pagl-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  /* equipo: Equipo = {
    id:1,
    nombre:"america de cali",
    ciudad:"cali",
    director:"juanito"
  } */

  equipos = EQUIPOS;

  equipo: Equipo;

  seleccionar(item: Equipo):void{
    //this.equipo = item;
    !this.equipo ? this.equipo = item : (this.equipo==item? this.equipo = null : this.equipo = item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
