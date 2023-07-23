import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './pages/single/single.component';
import { Err404Component } from './pages/err404/err404.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  // {path:"product", component:HomeComponent},
  // {path:"product/:id", component:SingleComponent},
  {path:"product", children:[
    {path:"", component:HomeComponent}, //product/
    {path:"add", component:AddComponent},  //product/add
    {path:":id", component:SingleComponent} // product/any
  ]},
  {path:"**", component:Err404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
