import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/Plant';
import { PlantService } from '../plant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-plants',
  templateUrl: './delete-plants.component.html',
  styleUrls: ['./delete-plants.component.scss']
})
export class DeletePlantsComponent implements OnInit {
  selectedPlant?:any;
  plants!:Plant[];
  id:string="";
  name:string="";
  router: Router;

  constructor(private plantService: PlantService, private route: ActivatedRoute, router: Router){
    this.router=router;
  }

  ngOnInit():void {
    this.id = this.route.snapshot.paramMap.get("id") || ""

    this.plantService.getPlants().subscribe(response=>{
      this.plants=response.plants;
      this.selectedPlant=this.plants.find(plant=>plant.id===+this.id)

      })
}
  onSelect(plant:any): void {
    this.selectedPlant=plant;
    }
    onDelete() {
this.plantService.deletePlant(+this.id);
this.router.navigate(['/plants']).then(()=>{window.location.reload()})
    }
    }
