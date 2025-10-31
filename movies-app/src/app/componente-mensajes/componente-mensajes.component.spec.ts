import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMensajesComponent } from './componente-mensajes.component';

describe('ComponenteMensajesComponent', () => {
  let component: ComponenteMensajesComponent;
  let fixture: ComponentFixture<ComponenteMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteMensajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
