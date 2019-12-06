import { Evento } from '../modelos/evento';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EventosServicio {

  constructor() { }

  static eventos: Evento[] = [
    {
      nombre: 'Cosquín Rock 2019',
      lugar: 'AeroclubSanta María de Punilla',
      fecha: '02-10-2019'
    },
    {
      nombre: 'ArcticMonkeys en Argentina',
      lugar: 'Hipódromo de San Isidro',
      fecha: '03-30-2019'
    },
    {
      nombre: 'Lollapalooza Argentina',
      lugar: 'Hipódromo de San Isidro',
      fecha: '04-05-2019'
    },
    {
      nombre: 'Iron Maiden en Argentina',
      lugar: 'Estadio VélezSársfield',
      fecha: '10-12-2019'
    }
  ];
}

  // eventArray = [
  //   {
  //     nombre: 'Cosquín Rock 2019',
  //     lugar: 'AeroclubSanta María de Punilla',
  //     fecha: '02-10-2019'
  //   },
  //   {
  //     nombre: 'ArcticMonkeys en Argentina',
  //     lugar: 'Hipódromo de San Isidro',
  //     fecha: '03-30-2019'
  //   },
  //   {
  //     nombre: 'Lollapalooza Argentina',
  //     lugar: 'Hipódromo de San Isidro',
  //     fecha: '04-05-2019'
  //   },
  //   {
  //     nombre: 'Iron Maiden en Argentina',
  //     lugar: 'Estadio VélezSársfield',
  //     fecha: '10-12-2019'
  //   }
  // ];
  // public eventos = new BehaviorSubject<Evento[]> (this.eventArray);

//   getEventos(): BehaviorSubject<Evento[]> {
//     return this.eventos;
//   }

//   addEvento(e) {
//     this.eventArray.push(e);
//     console.log(this.eventArray);
//     this.eventos.next(this.eventArray);
//   }
// }
