import { TestBed } from '@angular/core/testing';

import { PokemonInfoService } from './pokemon.info.service';

describe('PokemonInfoServiceService', () => {
  let service: PokemonInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
