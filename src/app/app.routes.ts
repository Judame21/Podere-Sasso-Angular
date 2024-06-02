import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'contacto', title:'Contacto', loadComponent: () => ContactComponent},

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];
