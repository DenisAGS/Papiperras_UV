import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Frames
import { PrincipalComponent } from './principal/principal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { Publicidad2Component } from './publicidad/publicidad2/publicidad2.component';
import { PubOfertasComponent } from './ofertas/pub-ofertas/pub-ofertas.component';
import { PublicarPComponent } from './publicar-productos/publicar-p/publicar-p.component';
import { ReclamosFormularioComponent } from './reclamos-formulario/reclamos-formulario.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RetiroComponent } from './retiro/retiro.component';
import { DatosRetiroComponent } from './datos-retiro/datos-retiro.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';

const routes: Routes = [  
  {
    path:'principal',
    component: PrincipalComponent,
  },
  {
    path:'home',
    component: HomepageComponent,
  },
  {
    path:'retiro',
    component: RetiroComponent,
  },
  {
    path:'datos-retiro',
    component: DatosRetiroComponent,
  },
  {
    path:'about-us',
    component: AboutUsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'password',
    component: PasswordComponent
  },
  {
    path:'profile',
    component: ProfileComponent
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
    path:'estadistica',
    component: EstadisticaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
