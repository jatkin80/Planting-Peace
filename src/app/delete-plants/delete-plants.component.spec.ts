import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlantsComponent } from './delete-plants.component';

describe('DeletePlantsComponent', () => {
  let component: DeletePlantsComponent;
  let fixture: ComponentFixture<DeletePlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePlantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
