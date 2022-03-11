import { Component, Input, OnChanges, OnInit } from '@angular/core';

import {PokemonService} from "../pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {PokemonDetails} from "../pokemondetails.module";
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'sw-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})

export class PokemonDetailComponent implements OnChanges {

  pokemons ?: PokemonDetails
  @Input() poke ?: Pokemon

  constructor(private route :ActivatedRoute, private pService : PokemonService) { }

  ngOnChanges(): void {
    this.getPokemonsById();
  }

  getPokemonsById(): void {
    if (this.poke?.id){
      this.pService.getPokemonsDetails(this.poke.id).subscribe(pokemons => this.pokemons=pokemons);
    }
  }

}
