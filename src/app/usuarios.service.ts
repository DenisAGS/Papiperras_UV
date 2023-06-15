import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios = [
    { nombre: 'gatito', email: 'usuario1@example.com', password: 12345678 },
    { nombre: 'chinitomamado', email: 'usuario2@example.com', passsword: 'alebrije' },
    { nombre: 'bellakoso', email: 'usuario3@example.com', password: 28 }
  ];

  constructor() { }

  getUsuarios() {
    return this.usuarios;
  }
}