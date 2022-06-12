import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContacComponent } from './contac/contac.component';
import { ExperinceComponent } from './experince/experince.component';
import { LandingComponent } from './landing/landing.component';
import { PortFoComponent } from './port-fo/port-fo.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path:'',component:LandingComponent
  },
  {
    path:'About',component:AboutComponent
  },
   {
    path:'Portolio',component:PortFoComponent
  },
   {
    path:'Experiance',component:ExperinceComponent
  },
  {
    path:'Project',component:ProjectsComponent
  },
   {
    path:'Contact',component:ContacComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
