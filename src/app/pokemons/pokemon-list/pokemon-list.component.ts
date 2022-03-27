import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { PagedData } from '../paged-data.model';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'sw-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],

})
export class PokemonListComponent implements OnInit {

  @Output() pokemonDisplay = new EventEmitter<Pokemon>();
  pokemons ?: PagedData<Pokemon>
  search ?: String

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(0,20).subscribe(rs => this.pokemons = rs);
  }

  onChangeEvent(search: String){
    this.search = search
    if (search.length != 0) {
      this.pokemonService.getPokemonsSearch(search).subscribe(rs => this.pokemons = rs)
    }
    else{
      this.pokemonService.getPokemons(0,20).subscribe(rs => this.pokemons = rs);
    }
  }

  onScroll() {
    console.log('scrolled!!');
    this.pokemons!.offset += this.pokemons!.limit
    this.pokemonService.getPokemons(this.pokemons!.offset,this.pokemons!.limit).subscribe(rs => this.pokemons!.data = this.pokemons!.data.concat(rs.data));
  }

  afficherPokemonDetail(pk : Pokemon){
    this.pokemonDisplay.emit(pk)
  }

}
