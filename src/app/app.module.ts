import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Módulos
import { SeguridadModule, SeguridadRoutingModule } from './modulos';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, SeguridadModule, SeguridadRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
