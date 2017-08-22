import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';

@NgModule({
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule
  ],
  declarations: [IngresarComponent]
})
export class SeguridadModule { }
