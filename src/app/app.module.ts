import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/*import { MatIconModule} from '@angular/material/icon';*/


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal/principal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Publicidad2Component } from './publicidad/publicidad2/publicidad2.component';
import { PubOfertasComponent } from './ofertas/pub-ofertas/pub-ofertas.component';
import { PublicarPComponent } from './publicar-productos/publicar-p/publicar-p.component' ;
import { ReclamosFormularioComponent } from './reclamos-formulario/reclamos-formulario.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RetiroComponent } from './retiro/retiro.component';
import { DatosRetiroComponent } from './datos-retiro/datos-retiro.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsejosComponent } from './consejos/consejos.component';
import { ListOfertasComponent } from './ofertas/list-ofertas/list-ofertas.component' ;
import { CampañasComponent } from './publicidad/campañas/campañas.component';
import { MetricasComponent } from './publicidad/metricas/metricas.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AboutUsComponent,
    DevolucionComponent,
    InventarioComponent,
    PreguntasFrecuentesComponent,
    TutorialComponent,
    HeaderPageComponent,
    SidebarComponent,
    Publicidad2Component,
    PubOfertasComponent,
    PublicarPComponent,
    ReclamosFormularioComponent,
    HomepageComponent,
    RetiroComponent,
    DatosRetiroComponent,
    FooterPageComponent,
    EstadisticaComponent,
    ConsejosComponent,
    PublicarPComponent,
    ListOfertasComponent,
    CampañasComponent,
    MetricasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
