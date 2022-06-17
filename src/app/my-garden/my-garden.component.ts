import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/Plant';
import { PlantService } from '../plant.service';
import { MatListModule } from '@angular/material/list';
import { MatCardImage } from '@angular/material/card';

@Component({
  selector: 'app-my-garden',
  templateUrl: './my-garden.component.html',
  styleUrls: ['./my-garden.component.scss'],
})
export class MyGardenComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantService: PlantService) {}
  ngOnInit(): void {
    this.getPlants();
  }
  getPlants():void {
  this.plantService.getPlants()
  .subscribe(plants=>this.plants=plants);
  }
}

