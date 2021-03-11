import { Component, OnInit } from '@angular/core';

import { Equipo } from '../equipo';
import { EquipoService } from "../equipo.service";

@Component({
  selector: 'pagl-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  equipos: Equipo[];

  constructor(
    private equipoService: EquipoService,
  ) { }

  getEquipos():void{
    this.equipoService.getEquipos().subscribe(equipos => this.equipos = equipos.slice(1,3));
  }

  ngOnInit(): void {
    this.getEquipos(); 
  }

}
