import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Frames
import { PrincipalComponent } from './principal/principal.component';
import { AppComponent } from './app.component';

const routes: Routes = [  
{
    path:'AppComponent',
    component: AppComponent,
  },
  {
    path:'principal',
    component: PrincipalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }