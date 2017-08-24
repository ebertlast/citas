import { Component } from '@angular/core';
// import { Helper } from './app.helper';
import { Usuario } from './modulos/seguridad';
import { Location } from '@angular/common';
import { GlobalService } from './modulos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private usuario: Usuario = new Usuario();
  constructor(
    private location: Location,
    private _glo: GlobalService,
    private _router: Router,

  ) {
    if (_glo.GetUsuario().usuario && _glo.GetUsuario().usuario !== '') {
      this.SetUsuario(_glo.GetUsuario());
    }

    if (this.GetUsuario().usuario !== '') {
      // this._router.navigate(['/portal']);
    } else {
      this._router.navigate(['/ingresar']);
      // this._helper.CambiarColorTema();
    }
  }
  public SetUsuario(_usuario: Usuario) { this.usuario = _usuario; }
  public GetUsuario(): Usuario { return this.usuario; }
}
