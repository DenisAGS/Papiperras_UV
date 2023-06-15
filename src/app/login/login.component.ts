import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: any[] | undefined;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();
  }

}
