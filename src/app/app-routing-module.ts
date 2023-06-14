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
import { Publicidad2Component } from './publicidad/publicidad2/publicidad2.component';
import { PubOfertasComponent } from './ofertas/pub-ofertas/pub-ofertas.component';
import { PublicarPComponent } from './publicar-productos/publicar-p/publicar-p.component';
import { ReclamosFormularioComponent } from './reclamos-formulario/reclamos-formulario.component';
import { ProblemasProductosComponent } from './problemas-productos/problemas-productos.component';
import { PreguntasClientesComponent } from './preguntas-clientes/preguntas-clientes.component';
import { RespuestasPreguntasComponent } from './respuestas-preguntas/respuestas-preguntas.component';
import { ReclamosClientesComponent } from './reclamos-clientes/reclamos-clientes.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [  
  {
    path:'',
    component: PrincipalComponent,
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
    path:'header-page',
    component: HeaderPageComponent
  },
  {  
    path: 'publicidad2',
    component: Publicidad2Component
  },
  {
    path: 'ofertas',
    component: PubOfertasComponent
  },
  {
    path: 'publicar-productos',
    component: PublicarPComponent
  },
  {
    path:'reclamos-formulario',
    component: ReclamosFormularioComponent
  },
  {
    path:'problemas-productos',
    component: ProblemasProductosComponent
  },
  {
    path:'preguntas-clientes',
    component: PreguntasClientesComponent
  },
  {
    path:'respuestas-preguntas',
    component: RespuestasPreguntasComponent
  },
  {
    path:'reclamos-clientes',
    component: ReclamosClientesComponent
  },
  {
    path:'detalles',
    component: DetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
