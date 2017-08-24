import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { TgenService } from './servicios/tgen.service';

@NgModule({
  imports: [
    CommonModule,
    SistemaRoutingModule
  ],
  declarations: [],
  providers: [TgenService]
})
export class SistemaModule { }
