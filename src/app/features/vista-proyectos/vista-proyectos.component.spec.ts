import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProyectosComponent } from './vista-proyectos.component';

describe('VistaProyectosComponent', () => {
  let component: VistaProyectosComponent;
  let fixture: ComponentFixture<VistaProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
