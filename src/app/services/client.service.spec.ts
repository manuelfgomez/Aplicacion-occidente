import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ClientService } from './client.service';

describe('ClientService', () => {
  let service: ClientService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(ClientService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ClientService(httpClientSpy as any);
  });

  it('Debe de crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar objeto cliente', (done: DoneFn) => {

    //Mock de datos
    const mockClient = {
      nit: '800220154',
    }

    const mockResult = {
      "nit":"800220154",
      "nombre": "Flotas la Macarena",
      "capa": "Oro",
      "segmento": "A",
      "gerenteRelacion": "Carlos Gómez"
    }

    httpClientSpy.get.and.returnValue(of(mockResult));

    const { nit } = mockClient;

    service.getClient(nit)
      .subscribe(resultado => {
        expect(resultado).toEqual(mockResult)
        done();
      })

  });

});
