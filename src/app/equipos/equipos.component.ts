import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
//import { EQUIPOS } from '../lista-equipos';
import { EquipoService } from '../equipo.service';

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

  //equipos = EQUIPOS;
  equipos: Equipo[];
  equipo: Equipo;

  seleccionar(item: Equipo):void{
    //this.equipo = item;
    !this.equipo ? this.equipo = item : (this.equipo==item? this.equipo = null : this.equipo = item);
  }

  constructor(
    private equipoService : EquipoService,
  ) { }
  
    getEquipos(): void{
      //this.equipos = this.equipoService.getEquipos();
      this.equipoService.getEquipos().subscribe(equipos => {
        this.equipos = equipos
      })
    }

  ngOnInit(): void {
    this.getEquipos();
  }

}
