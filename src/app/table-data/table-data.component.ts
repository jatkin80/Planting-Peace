import { Component,   OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Plant } from '../models/Plant';
import { PlantService } from '../plant.service';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
plant: Plant | undefined;

 constructor(
  private route: ActivatedRoute,
  private plantService: PlantService,
  private location: Location
 ) { }

  ngOnInit(): void {
    this.getPlant();
  }
  getPlant():void {

    const id=parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.plantService.getPlant(id)
    .subscribe();

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
