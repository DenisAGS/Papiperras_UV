import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*import { MatIconModule} from '@angular/material/icon';*/


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
