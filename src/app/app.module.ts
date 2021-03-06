import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyGardenComponent } from './my-garden/my-garden.component';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { TableDataComponent } from './table-data/table-data.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantSearchComponent } from './plant-search/plant-search.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DeletePlantsComponent } from './delete-plants/delete-plants.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyGardenComponent,
    WeatherWidgetMainComponent,
    PlantFormComponent,
    TableDataComponent,
    MessagesComponent,
    DashboardComponent,
    PlantSearchComponent,
    DeletePlantsComponent,
    AddPlantComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
