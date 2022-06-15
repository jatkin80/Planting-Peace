import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantFormComponent } from './plant-form/plant-form.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { TableDataComponent } from './table-data/table-data.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyGardenComponent } from './my-garden/my-garden.component';
import { DeletePlantsComponent } from './delete-plants/delete-plants.component';

const routes: Routes = [
  {    path:'dashboard', component: DashboardComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 {   path: 'plants', component: PlantFormComponent},
 {path: 'detail/:id', component: TableDataComponent},
{path:'editplants', component:DeletePlantsComponent},
 {path:'mygarden', component:MyGardenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
