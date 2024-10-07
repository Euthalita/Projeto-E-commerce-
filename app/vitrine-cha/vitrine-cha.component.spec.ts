import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrineChaComponent } from './vitrine-cha.component';

describe('VitrineChaComponent', () => {
  let component: VitrineChaComponent;
  let fixture: ComponentFixture<VitrineChaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitrineChaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitrineChaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
