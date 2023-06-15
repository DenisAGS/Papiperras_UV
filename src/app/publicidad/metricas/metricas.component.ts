import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Campania } from '../publicidad2/publicidad2.interface';
import * as campanias from 'src/assets/json/campaniasJson.json'
import * as campaniasJson from 'src/assets/json/campaniasJson.json';

@Component({
  selector: 'app-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.css']
})
export class MetricasComponent implements OnInit {
  isDropdownOpen: boolean = false;
  id!:any;
  nombre!:any;
  presupuestoDiario!:any;
  estado: boolean = true;

  campanias: Campania[] = (campanias as any).default;
  campania: any;
  datosModificados: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const campaña= this.route.snapshot.queryParamMap.get('campania');
    if (campaña) {
      const datosModificadosParsed = JSON.parse(campaña);
      this.datosModificados = datosModificadosParsed;
      this.id = datosModificadosParsed.id;
      this.nombre = datosModificadosParsed.nombre;
      this.presupuestoDiario = datosModificadosParsed.presupuestoDiario;
      console.log('Datos recibidos:')
      console.log('ID: ', this.id);
      console.log('Nombre:', this.nombre);
      console.log('Presupuesto', this.presupuestoDiario);
      console.log('Estado:', this.estado)
      this.agregarCampania();
      }
    }

  getCampaniasbyId(id: string): any {
  const campania = this.campanias.find(campania => campania.id === id);
  if (campania) {
    const datosModificadosCampaña = this.datosModificados?.[id];
    if (datosModificadosCampaña) {
      return { ...campania, ...datosModificadosCampaña };
    }
  }
  return campania;
  }

  agregarCampania() {
    const campanias = (campaniasJson as any).default;
    this.campania = {
      id: this.id,
      nombre: this.nombre,
      presupuestoDiario: this.presupuestoDiario,
      estado: true,
      impresiones: null,
      clics: null,
      ingresos: null,
      inversion: null,
      ventas: null,
      ingresosinversion: null,
      productos: []
    };
    console.log(campanias);  
    campanias.push(this.campania); 
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  verDetallesCampania(campania: Campania) {
    this.router.navigate(['/campañas'], { state: { campania } });
  }

  cambiarEstadoCampania(id: string) {
    const campania = this.getCampaniasbyId(id);
    if (campania) {
      campania.estado = !campania.estado; // Cambia el estado de true a false, y viceversa
    }
  }

  mostrarOpciones: boolean = false;
  toggleOpciones() {
    this.mostrarOpciones = !this.mostrarOpciones;
  }



}
