import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
// import { Helper } from '../../../app.helper';
import { environment } from '../../../../environments/environment';
import { Tgen } from '../modelos';
import { GlobalService } from '../../seguridad';
@Injectable()
export class TgenService {

  constructor(
    private _http: Http,
    private _glo: GlobalService
  ) { }
  public get(tabla: string = '', campo: string = '', codigo: string = ''): Observable<Tgen[]> {
    // return this._http.get(environment.apiurl + '/tgen/' + compania)
    return this._http.get(environment.apiurl + '/tgen/')
      .map((response: Response) => { return response.json().result; })
      .catch(err => this._glo.CapturarError(err));
  }
}
