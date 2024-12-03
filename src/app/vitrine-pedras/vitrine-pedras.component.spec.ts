import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrinePedrasComponent } from './vitrine-pedras.component';

describe('VitrinePedrasComponent', () => {
  let component: VitrinePedrasComponent;
  let fixture: ComponentFixture<VitrinePedrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitrinePedrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitrinePedrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
