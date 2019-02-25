import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {AboutComponent} from '../about/about.component';
import {LandingComponent } from '../landing/landing.component';
const routes:Routes = [
  {path:'', component:LandingComponent},
  {path:'about',component:AboutComponent}
]

@NgModule({
  imports: [
    CommonModule,
RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
