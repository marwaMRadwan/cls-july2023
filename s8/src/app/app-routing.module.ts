import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { StandsComponent } from './components/pages/stands/stands.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { RegisterComponent } from './components/pages/user/register/register.component';
import { LoginComponent } from './components/pages/user/login/login.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"stands/:id", children:[
    {path:"", component:StandsComponent},
    {path:":standId", component:ProductsComponent},
  ]},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
