import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RegreactComponent } from './pages/regreact/regreact.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"reactive", component:RegreactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
