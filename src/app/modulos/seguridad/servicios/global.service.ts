import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Helper } from '../../../app.helper';
import { environment } from '../../../../environments/environment';
import { Usuario as Ususu } from '../modelos';
@Injectable()
export class GlobalService {

  private usuario: Ususu = new Ususu();
  constructor(
    private _helper: Helper,
    private _http: Http
  ) {
    if (localStorage.getItem(environment.currentuser) !== null) {
      const currentuser = JSON.parse(localStorage.getItem(environment.currentuser))['usuario'];
      this.SetUsuario(currentuser);
    }
  }

  /**
   * Obtiene los datos del usuario que ha iniciado sesión
   */
  public GetUsuario(): Ususu { return this.usuario; }

  /**
   * Establece los datos del usuario que ha iniciado sesión
   * @param _usuario Usuario que ha iniciado sesión correctamente
   */
  public SetUsuario(_usuario: Ususu) { this.usuario = _usuario; }

  /**
   * Extrae el contenido del Response que devuelve la API Rest
   * @param res Respuesta que genera la API Rest
   * @param mostrarError Muestra al usuario o no lo que contiene el campo 'error' en el response.
   */
  public ExtraerResultados(res: Response, mostrarError: boolean = true) {
    const body = res.json();
    // console.log(body.response);
    if (!body.respose && body.message && mostrarError) {
      this._helper.Notificacion(body.message || body.statusText, 'advertencia');
    }
    this.usuario.token = (typeof (body.token) === 'undefined') ? '' : body.token;
    return body.result || {}
  }

  /**
   * Maneja los errores que se puedan generar la momento de hacer las solicitudes a la API Rest
   * @param error Respuesta que genera la API Rest
   */
  public CapturarError(error: Response | any) {
    let errMsg: string;
    if (!error.ok) {
      errMsg = (error._body.message) ? error._body.message : '';
      if (error instanceof Response) {
        let body: any = '';
        try {
          body = error.json();
        } catch (e) {
          body = '';
        }
        const err = body.error || JSON.stringify(body);
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      this._helper.Notificacion(errMsg, 'error');
    }
    return Observable.throw(errMsg);
  }

  public Ingresar(usuario: string, clave: string): Observable<boolean> {
    const json = JSON.stringify({
      usuario: usuario, clave: clave
    });
    const params = 'json=' + json;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this._http.post(environment.apiurl + '/ususu/autenticar', params, { headers: headers })
      .map((response: Response) => {
        const userData: Ususu = this.ExtraerResultados(response);
        if (typeof (userData.usuario) !== 'undefined') {
          // console.log('Usuario: ' + userData.USUARIO);
          this.SetUsuario(userData);
          localStorage.setItem(environment.currentuser, JSON.stringify({ usuario: this.usuario }));
          return true;
        }
        return false;
      })
      .catch(err => this.CapturarError(err));
  }

}
