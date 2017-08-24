import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { GlobalService } from './servicios/global.service';

import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule, HttpModule
  ],
  declarations: [IngresarComponent],
  providers: [GlobalService]
})
export class SeguridadModule { }
