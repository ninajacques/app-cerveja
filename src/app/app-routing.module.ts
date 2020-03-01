import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { MasterComponent } from './pages/master/master.component';
import { LoginComponent } from './pages/login/login.component';
import { MapComponent } from './pages/map/map.component';
import { CreateSaleComponent } from './pages/create-sale/create-sale.component';


const routes: Routes = [
  {path: "", component: LoginComponent },
  {
    path: "",
    component: MasterComponent,
    children: [
      {path: "main", component: MainComponent },
      {path: "map", component: MapComponent },
      {path: "create-sale", component: CreateSaleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
