import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso-venta',
  templateUrl: './progreso-venta.component.html',
  styleUrls: ['./progreso-venta.component.css']
})
export class ProgresoVentaComponent implements OnInit {
    
  productos = [
    { numeroenvio: '#1209', numeroproducto: '01008',estado: 'En transito', fechaenvio:'',  horaenvio:'', fechaentrega:''},
  ];

  circles = [
    { cx: '20%', text: 'En preparacion' },
    { cx: '40%', text: 'Listo para enviar' },
    { cx: '60%', text: 'En transito' },
    { cx: '80%', text: 'Entregado' },
  ];

  carritoTransform = '';

  currentIndex = 0;
  currentStep = 0;
  totalSteps = 10;

  constructor() { 
    this.inicializarFechasEnvioYEntrega();    
  }

  ngOnInit(): void {
    this.moverCarrito();
  }

  moverCarrito(): void {
    const startCx = this.circles[this.currentIndex].cx;
    const endCx = this.circles[(this.currentIndex + 1) % this.circles.length].cx;

    const startPos = parseFloat(startCx);
    const endPos = parseFloat(endCx);

    const stepSize = (endPos - startPos) / this.totalSteps;
    this.currentStep = 0;

    this.animateCarrito(startPos, endPos, stepSize);
  }

  animateCarrito(startPos: number, endPos: number, stepSize: number): void {
    this.carritoTransform = `translateX(${startPos + stepSize * this.currentStep}%)`;

    this.currentStep++;

    if (this.currentStep <= this.totalSteps) {
      setTimeout(() => {
        this.animateCarrito(startPos, endPos, stepSize);
      }, 200);
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.circles.length;
      setTimeout(() => {
        this.moverCarrito();
      }, 5000);
    }
  }

  inicializarFechasEnvioYEntrega() {
    const fechaActual =new Date();

    //Recorrer la lista de productos
    this.productos.forEach(producto => {
      producto.fechaenvio = fechaActual.toLocaleDateString();
      producto.horaenvio = fechaActual.toLocaleTimeString();

      //Generar una fecha aleatoria posterior a la fecha de envio
      const fechaEntrega = new Date(fechaActual.getTime() + Math.random() * 604800000)  // 604800000 Milisegundos = 1 semana
      producto.fechaentrega = fechaEntrega.toLocaleDateString();
    });
  }

}
