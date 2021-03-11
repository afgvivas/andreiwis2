import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'pagl-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.css']
})
export class EquipoDetalleComponent implements OnInit {
  @Input() equipo:Equipo;
  constructor(
    private route: ActivatedRoute,
    private equipoService: EquipoService,
    //private location: Location
  ) { }
  
  getEquipo():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.equipoService.getEquipo(id).subscribe(equipo => this.equipo = equipo);
  }

  ngOnInit(): void {
    this.getEquipo();
  }

}
