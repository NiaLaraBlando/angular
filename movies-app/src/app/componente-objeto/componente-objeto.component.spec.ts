import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteObjetoComponent } from './componente-objeto.component';

describe('ComponenteObjetoComponent', () => {
  let component: ComponenteObjetoComponent;
  let fixture: ComponentFixture<ComponenteObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteObjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
