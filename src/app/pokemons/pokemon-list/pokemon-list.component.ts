import { Component, OnInit } from '@angular/core';
import { PagedData } from '../paged-data.model';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'sw-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],

})
export class PokemonListComponent implements OnInit {

  pokemons ?: PagedData<Pokemon>
  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(rs => this.pokemons = rs) // concat pokemons
  }

  onScroll() {
    console.log('scrolled!!'); // get new limit and offset (in pageddata)
  }

}
