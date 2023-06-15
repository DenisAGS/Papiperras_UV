import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { HttpClientModule } from '@angular/common/http';
import { SaldosComponent } from './saldos/saldos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarioComponent } from './calendario/calendario.component';
import { NgChartsModule } from 'ng2-charts';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { VolumenComponent } from './volumen/volumen.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { InformacionEnvioComponent } from './informacion-envio/informacion-envio.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { EstadocuentaComponent } from './estadocuenta/estadocuenta.component';
import { FilterPipe } from './estadocuenta/filter.pipe';
import { FacturacionftComponent } from './facturacionft/facturacionft.component';
import { FacturacionimgComponent } from './facturacionimg/facturacionimg.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
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
    CalendarioComponent,
    VolumenComponent,
    SaldosComponent,
    InformacionEnvioComponent,
    NotificacionesComponent,
    EstadocuentaComponent,
    FacturacionftComponent,
    FacturacionimgComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FullCalendarModule,
    NgChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }