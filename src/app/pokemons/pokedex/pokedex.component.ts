import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'sw-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor() { }

  pk ?: Pokemon

  ngOnInit(): void {
  }

  afficherPokemonDetail(pokemon : Pokemon){
    this.pk = pokemon
  }

}
