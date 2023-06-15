import { Component, OnInit } from '@angular/core';
import { CargosService } from '../services/cargos.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-retiro',
  templateUrl: './datos-retiro.component.html',
  styleUrls: ['./datos-retiro.component.css']
})
export class DatosRetiroComponent implements OnInit {
  numero: number = 0;
  cuenta!: number;
  disponible: number | undefined;
  beneficiarioForm!: FormGroup;

  constructor(private cargosService: CargosService, private router: Router) { }

  ngOnInit(): void {
    this.cargosService.getCargos().subscribe(datos => {
      this.cuenta = datos.disponible[0].saldo;
      this.disponible = this.cuenta;
    });

    this.beneficiarioForm = new FormGroup({
      nombreBeneficiario: new FormControl('', Validators.required),
      numeroCuenta: new FormControl('', Validators.required)
    });
  }

  mostrarConfirmacion() {
    if (this.numero <= 0) {
      alert('Ingresa un monto válido');
      return;
    }

    if (this.numero > this.cuenta) {
      alert('Saldo insuficiente');
      return;
    }

    if (this.beneficiarioForm.invalid) {
      alert('Ingresa el nombre del beneficiario y el número de cuenta');
      return;
    }

    const confirmacion = window.confirm('¿Estás seguro de realizar el retiro?');
    if (confirmacion) {
      this.router.navigate(['/retiro']);
    }
  }

  actualizarDisponible() {
    this.disponible = this.cuenta - this.numero;
  }
}
