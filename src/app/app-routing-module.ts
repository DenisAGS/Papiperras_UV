import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Frames
import { PrincipalComponent } from './principal/principal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RetiroComponent } from './retiro/retiro.component';
import { DatosRetiroComponent } from './datos-retiro/datos-retiro.component';

const routes: Routes = [  
  {
    path:'',
    component: PrincipalComponent,
  },
  {
    path:'homepage',
    component: HomepageComponent
  },
  {
    path:'about-us',
    component: AboutUsComponent
  },
  {
    path:'devolucion',
    component: DevolucionComponent
  },
  {
    path:'inventario',
    component: InventarioComponent
  },
  {
    path:'tutorial',
    component: TutorialComponent
  },
  {
    path:'preguntas-frecuentes',
    component: PreguntasFrecuentesComponent
  },
  {
    path:'retiro',
    component: RetiroComponent
  },
  {
    path:'header-page',
    component: HeaderPageComponent
  },
  {
    path:'datos-retiro',
    component: DatosRetiroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }