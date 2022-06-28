import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../models/Plant';
import { PlantService } from '../plant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title= "Planting Peace";
  plants: Plant[]=[];
  @Input()id!: number;
  @Input() name!: string;
  @Input()type!: string;
  @Input()imageUrl!: string;
  @Input()description!: string;
  @Input() date!: any;
  @Input()  notes!:string;
  @Input()  daystomaturity!: number;
  @Input() spacing!: number;
  selectedPlant?:any;
router: Router;
location: string="";

  constructor(private plantService:PlantService, router:Router) {
    this.router=router;
   }

  ngOnInit() {
    this.plantService.getPlants().subscribe(response =>{
      this.plants=response.plants

  })

}
onSelect(plant:any):void {
  this.selectedPlant=plant;
  }

  onDelete(plant: any): void{
this.plantService.deletePlant(+this.id);
this.router.navigate(['/plants']).then(()=>{window.location.reload()})
  }
}
