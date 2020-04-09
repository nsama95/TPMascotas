import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Mascota} from "../../clases/mascota";
@Component({
  selector: 'app-cargar_mascota',
  templateUrl: './cargar_mascota.component.html',
  styleUrls: ['./cargar_mascota.component.css']
})
export class CargarMascotaComponent implements OnInit {

  @Output() turno =  new EventEmitter<any>();
  @Input () nombre : string;
  @Input () imagen :string;
  @Input() tipo : string;

  constructor() { }

  ngOnInit(): void {
  }

  public enviarMascota(event)
  {
    return this.turno.emit(new Mascota(this.nombre,this.tipo,this.imagen));
  }

}
