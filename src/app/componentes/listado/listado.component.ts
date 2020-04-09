import { Component, OnInit } from '@angular/core';
import{Mascota}from "../../clases/mascota";
@Component({
  selector: 'app-listado',
  templateUrl:'./listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  public mascotas : Array<Mascota> = [];
  public datos : Mascota;

  constructor() { }

  ngOnInit(): void {
    this.datos = null;
  }
  cargarLista(event)
  {
    return this.mascotas.push(event);
  }

  verDetalle(auxMas:Mascota )
  {
    this.datos = auxMas;

    console.log(this.datos);
  }
}
