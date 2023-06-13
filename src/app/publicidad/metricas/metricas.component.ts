import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Campania } from '../publicidad2/publicidad2.interface';
import * as campanias from 'src/assets/json/campaniasJson.json'

@Component({
  selector: 'app-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.css']
})
export class MetricasComponent implements OnInit {
  isDropdownOpen: boolean = false;

  campanias: Campania[] = (campanias as any).default;

  constructor(private router: Router, private route: ActivatedRoute) { }

  getCampaniasbyId(id: string): Campania | undefined {
    const campania = this.campanias.find(campania => campania.id === id);
    if (campania && this.campanias.length > 0) {
      const oferta = this.campanias.find(campania => campania.id === id);
    }
  
    return campania;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  

  ngOnInit(): void {
  }

}
