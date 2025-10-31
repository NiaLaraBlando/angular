import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteArrayComponent } from './componente-array.component';

describe('ComponenteArrayComponent', () => {
  let component: ComponenteArrayComponent;
  let fixture: ComponentFixture<ComponenteArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
