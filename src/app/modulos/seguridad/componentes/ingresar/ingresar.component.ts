import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Usuario } from '../../modelos';
// import { } from '../'
declare var $: any;
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit, AfterViewInit {
  public usuario: Usuario = new Usuario();
  public passwd = ''; // Reescribir contraseña

  constructor() { }

  ngOnInit() {
    const usuario = this.usuario;

  }

  ngAfterViewInit() {
    this.usuario = new Usuario();
    // $('input[name="usuario"]').forEach(input => {
    //   input.value = '';
    // });
    $('body').addClass('gray-bg');

    $('.i-checks').iCheck({
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'iradio_square-green',
    });
  }

  prueba() {
    console.log(this.usuario.usuario);
  }

  public registrarme() {
    console.log(this.usuario);
  }

}
