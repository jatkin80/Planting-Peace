import { Component, Input } from '@angular/core';

export interface Plant {
  name: string;
  position: number;
  planted: any;
  toMaturity: number;
}

const PLANT_DATA: Plant[] = [
  {position: 1, name: 'Tomato', planted: '4-2-2022', toMaturity: 30},
  {position: 2, name: 'Basil', planted: '4-12-2022', toMaturity: 20},
  {position: 3, name: 'Okra', planted: '4-7-2022', toMaturity: 45},
  {position: 4, name: 'Spaghetti Squash', planted: '4-6-2022', toMaturity: 32},
  {position: 5, name: 'Pumpkin', planted: '4-3-2022', toMaturity: 23},
  {position: 6, name: 'Cucumber', planted: '4-9-2022', toMaturity: 4},
  {position: 7, name: 'Bell Pepper', planted: '5-2-2022', toMaturity: 8},
  {position: 8, name: 'Strawberry', planted: '4-19-2022', toMaturity: 19},
  {position: 9, name: 'Mint', planted: '4-1-2022', toMaturity: 0},
  {position: 10, name: 'Jalapeno', planted: '4-29-2022', toMaturity: 341},
];


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {

  displayedColumns: string[] = [ 'name', 'planted', 'toMaturity'];
  dataSource = PLANT_DATA;
  }
