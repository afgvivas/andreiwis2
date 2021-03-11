import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquiposComponent } from './equipos/equipos.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { TableroComponent } from './tablero/tablero.component';
import { EquipoDetalleComponent } from './equipo-detalle/equipo-detalle.component';

const routes: Routes = [
    {path:'equipos', component: EquiposComponent},
    {path:'tablero', component: TableroComponent},
    {path:'', redirectTo:'/tablero', pathMatch: 'full'},
    {path:'detalle/:id', component: EquipoDetalleComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
