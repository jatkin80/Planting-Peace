import { Component, OnInit, Input } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { Plant, PlantResponse, PlantsResponse } from '../models/Plant';
import { PlantService } from '../plant.service';
import {Router} from'@angular/router'
;
@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {
  plants: Plant[]=[];
  @Input()  id!: number;
  @Input()  name!: string;
  @Input()  description!: string;
  @Input()  imageUrl!:string;
  @Input() date!:string;
  @Input() type!:string;
  @Input() notes!:string;
  @Input() daystomaturity!: number;
  @Input()spacing!: number;


  constructor(private plantService: PlantService, private router: Router){}
  ngOnInit() {
this.plantService.getPlants().subscribe(response=>
      {this.plants=response.plants
      });
    }
    addPlant(newPlant:Plant) {
this.plantService.addPlant(newPlant).subscribe(response=>{
  this.plants=[response.plant, ...this.plants]
  console.log(newPlant);
    })

  }

    }

