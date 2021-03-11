import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipo } from './equipo';
import { EQUIPOS } from './lista-equipos';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(
    private mensajeService: MensajeService,
  ) { }

  getEquipos(): Observable<Equipo[]>{
    this.mensajeService.agregar("Equipo service: Obtiene lista de equipos");
    return of(EQUIPOS);
  }

  getEquipo(id: number): Observable<Equipo>{
    this.mensajeService.agregar("Equipo service: Equipo encontrado id: "+id);
    return of(EQUIPOS.find(equipo => equipo.id === id));
  }
}
