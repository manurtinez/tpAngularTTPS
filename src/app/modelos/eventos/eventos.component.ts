import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { EventosServicio } from 'src/app/servicios/eventos-servicio';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers: [ EventosServicio ]
})
export class EventosComponent implements OnInit {
  eventos: Evento[];
  constructor(private servicio: EventosServicio) {}

  ngOnInit() {
    this.eventos = EventosServicio.eventos;
    // this.servicio.getEventos().subscribe((eventArray) => {
    //   console.log('nuevo array', eventArray);
    //   this.eventos = eventArray;
    // });
  }

}
