import { Component, OnInit } from '@angular/core';
import { faLeaf, faWorm, faSeedling, faReceipt } from '@fortawesome/free-solid-svg-icons';
declare var myExtObject:any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit  {
  faLeaf=faLeaf;
  faWorm=faWorm;
  faSeedling=faSeedling;
  faReceipt=faReceipt;
  ngOnInit(): void {
myExtObject();
  }
}
