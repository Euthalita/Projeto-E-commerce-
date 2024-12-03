import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrineIncensoComponent } from './vitrine-incenso.component';

describe('VitrineIncensoComponent', () => {
  let component: VitrineIncensoComponent;
  let fixture: ComponentFixture<VitrineIncensoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitrineIncensoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitrineIncensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
