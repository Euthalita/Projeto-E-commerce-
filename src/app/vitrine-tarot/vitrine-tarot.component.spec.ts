import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrineTarotComponent } from './vitrine-tarot.component';

describe('VitrineTarotComponent', () => {
  let component: VitrineTarotComponent;
  let fixture: ComponentFixture<VitrineTarotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitrineTarotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitrineTarotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
