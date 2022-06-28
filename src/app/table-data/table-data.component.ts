import { Component,   OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Plant } from '../models/Plant';
import { PlantService } from '../plant.service';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
plant: any;
plants!: Plant[];
id:string="";
name: string="";


 constructor(
  private route: ActivatedRoute,
  private plantService: PlantService,
private location:Location
 )
 {

 }

  ngOnInit(): void {
this.id=this.route.snapshot.paramMap.get('id') || ""
    this.plantService.getPlants().subscribe
    (response=>{
      this.plants=response.plants;
      this.plant=this.plants.find (plant=>plant.id===+this.id)
    })
  }




goBack():void {
this.location.back();
}


save(): void {
  if (this.plant) {
    this.plantService.updatePlant(this.plant)
      .subscribe(() => this.goBack());
  }
}

}
