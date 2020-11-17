import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Componentes/home/home.component';
import { SearchComponent } from './Componentes/search/search.component';
import { AuthGuard } from './Service/auth.guard';
import { ViewComponent } from './Componentes/view/view.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  },
  {
    path: '***',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }


];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
