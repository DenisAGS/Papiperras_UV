import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Frames
import { PrincipalComponent } from './principal/principal.component';
import { PageAboutUsComponent } from './Page-about-us/page-about-us.component';

const routes: Routes = [  
  {
    path:'',
    component: PrincipalComponent,
  },
  {
    path:'pageaboutus',
    component: PageAboutUsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }