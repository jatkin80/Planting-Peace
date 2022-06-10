import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '../models/Plant';
import { PlantService } from '../plant.service';



@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  plants: Plant[] = [];
  displayedColumns: string[] = [ 'name', 'planted', 'toMaturity'];

  constructor(private plantService: PlantService){}

  ngOnInit()
{
  this.plantService.fetchPlants().subscribe(plants=> {
    this.plants=plants
  })
  }
  }

