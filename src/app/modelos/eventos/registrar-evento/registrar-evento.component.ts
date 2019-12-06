import { Component, OnInit, Output } from '@angular/core';
import { Evento } from '../../evento';
import { EventosServicio } from 'src/app/servicios/eventos-servicio';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registrar-evento',
  templateUrl: './registrar-evento.component.html',
  styleUrls: ['./registrar-evento.component.css'],
  providers: [ EventosServicio ]
})
export class RegistrarEventoComponent implements OnInit {
  private contador = 0;
  @Output() agregado = new EventEmitter<Evento>();
  evento: Evento = new Evento('', '', '');
  constructor(private servicio: EventosServicio) {}

  ngOnInit() {}

  agregarEvento() {
    console.log('hola');
    // const e = {
    //   nombre: 'lala',
    //   lugar: 'lelel',
    //   fecha: 'lulu'
    // };
    EventosServicio.eventos.push(this.evento);
  }
}
