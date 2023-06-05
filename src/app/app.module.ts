import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';


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

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AboutUsComponent,
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
    DevolucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
