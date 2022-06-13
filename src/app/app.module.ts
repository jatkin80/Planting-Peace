import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
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

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false},


    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
