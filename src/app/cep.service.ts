import { Injectable } from '@angular/core';
import { CepLocation } from './cep-location';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  url = 'http://opencep.com/v1/';

  constructor() { }

  async getCepDetails(cep: string): Promise<CepLocation> {
    const data = await fetch(this.url+cep);
    return await data.json() ?? [];
  }
}
