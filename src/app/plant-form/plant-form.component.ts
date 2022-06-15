import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/Plant';
import { PlantService } from '../plant.service';


@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.scss']
})
export class PlantFormComponent implements OnInit {

  plants: Plant[]=[];

constructor(private plantService: PlantService){}
ngOnInit(): void {
  this.getPlants();

}

getPlants():void {
this.plantService.getPlants()
.subscribe(plants=>this.plants=plants);
}
addPlant(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.plantService.addPlant({ name } as Plant)
    .subscribe(plant => {
      this.plants.push(plant);
    });
}

delete(plant: Plant): void {
  this.plants = this.plants.filter(p => p !== plant);
  this.plantService.deletePlant(plant.id).subscribe();
}

}

