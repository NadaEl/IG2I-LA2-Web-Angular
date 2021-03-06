import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PagedData } from './paged-data.model';
import { Pokemon } from './pokemon.model';
import {PokemonDetails} from "./pokemondetails.module";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getPokemons():Observable<PagedData<Pokemon>>{
    return this.http.get<PagedData<Pokemon>>('http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons');
  }

  getPokemonsDetails(id:number): Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>('http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons/'+id);
  }

}
