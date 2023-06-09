import { Component, OnInit } from '@angular/core';
import { Campania } from './publicidad2.interface';

@Component({
  selector: 'app-publicidad2',
  templateUrl: './publicidad2.component.html',
  styleUrls: ['./publicidad2.component.css']
})
export class Publicidad2Component implements OnInit {
  campanias: Campania[] = [];
  campania: Campania = {
    nombreCampania: '',
    presupuestoDiario: 0
  }
  imprimirCampania() {
    for (let i = 0; i < this.campanias.length; i++) {
      const campania = this.campanias[i];
      console.log(`Campaña ${i + 1}:`);
      console.log('Nombre Campaña:', campania.nombreCampania);
      console.log('Presupuesto diario:', campania.presupuestoDiario);
      console.log('------------------------------');
    }
  }
  agregarCampania() {
    this.campanias.push(this.campania);
    this.campania = {
      nombreCampania: '',
      presupuestoDiario: 0,
    };
  }
  constructor() { }

  ngOnInit(): void {
  }

}
