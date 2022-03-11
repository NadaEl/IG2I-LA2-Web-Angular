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
    this.pokemonService.getPokemons(this.pokemons!.offset,this.pokemons?.limit).subscribe(rs => this.pokemons = rs) // concat pokemons
  }

  onScroll() {
    console.log('scrolled!!');
    this.pokemonService.getPokemons(this.pokemons!.offset,this.pokemons?.limit).subscribe(rs => this.pokemons!.data = this.pokemons!.data.concat(rs.data) ) // concat pokemons
  }

}
