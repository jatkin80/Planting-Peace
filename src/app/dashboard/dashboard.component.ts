import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/Plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
plants: Plant[]=[];
  constructor(private plantService:PlantService) { }

  ngOnInit(): void {
    this.getPlants();
  }
getPlants(): void {
this.plantService.getPlants()
.subscribe(plants => this.plants=plants.slice(1,5));
}
}
