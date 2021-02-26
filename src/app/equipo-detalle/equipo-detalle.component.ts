import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from '../equipo';

@Component({
  selector: 'pagl-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.css']
})
export class EquipoDetalleComponent implements OnInit {

  constructor() { }
  @Input() equipo:Equipo;
  ngOnInit(): void {
  }

}
