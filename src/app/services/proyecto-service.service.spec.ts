import { TestBed } from '@angular/core/testing';

import { proyectoService } from './proyecto-service.service';

describe('ProyectoServiceService', () => {
  let service: proyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(proyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
