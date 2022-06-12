import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFoComponent } from './port-fo.component';

describe('PortFoComponent', () => {
  let component: PortFoComponent;
  let fixture: ComponentFixture<PortFoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortFoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortFoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
