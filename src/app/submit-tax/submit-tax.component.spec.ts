import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTaxComponent } from './submit-tax.component';

describe('SubmitTaxComponent', () => {
  let component: SubmitTaxComponent;
  let fixture: ComponentFixture<SubmitTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
