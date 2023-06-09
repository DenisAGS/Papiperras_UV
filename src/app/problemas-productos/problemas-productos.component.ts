import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemasServices } from '../services/problemas.service';

@Component({
  selector: 'app-problemas-productos',
  templateUrl: './problemas-productos.component.html',
  styleUrls: ['./problemas-productos.component.css']
})
export class ProblemasProductosComponent implements OnInit {

  constructor(private router: Router, private problemasServicio: ProblemasServices  ) { }
  
  redirectToReclamos(){
    this.router.navigate(['/reclamos-formulario']);
  }

  data : any[] = [];

  obtenerDatosJson(){
    this.problemasServicio.getJsonData().subscribe(data => {
      this.data = data;
    });
  }
  

  ngOnInit() : void{
    
   }

}
