import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/Plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-delete-plants',
  templateUrl: './delete-plants.component.html',
  styleUrls: ['./delete-plants.component.scss']
})
export class DeletePlantsComponent implements OnInit {  plants: Plant[]=[];

  constructor(private plantService: PlantService){}
  ngOnInit(): void {
   this.getPlants()

  }
  getPlants():void {

    }

    delete(plant: Plant): void {
      this.plants = this.plants.filter(p => p !== plant);
      this.plantService.deletePlant(plant.id).subscribe();
    }
}
