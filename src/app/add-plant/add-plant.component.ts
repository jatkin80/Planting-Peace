import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { Plant, PlantResponse, PlantsResponse } from '../models/Plant';
import { PlantService } from '../plant.service';
@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {
  plants: Plant[]=[];
  id!:number;
  name!:string;
  spacing!:number;
  notes!:string;
  description!:string;
  daystomaturity!:number;
  dateadded!:string;
  imageUrl!:string;
  type!:string;


  constructor(private plantService: PlantService){}
  ngOnInit(): void {

  }

  addPlant() {
    const plant={
      id: this.id,
      name:this.name,
      type:this.type,
      imageUrl:this.imageUrl,
      dateadded:this.dateadded,
      daystomaturity:this.daystomaturity,
      description:this.description,
      notes:this.notes,
      spacing:this.spacing
    }

  this.plantService.addPlant(plant);
}

}
