import { Component, Input, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {PokemonDetails} from "../pokemondetails.module";

@Component({
  selector: 'sw-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})

export class PokemonDetailComponent implements OnInit {

  @Input() pokemons ?: PokemonDetails

  constructor(private route :ActivatedRoute, private pService : PokemonService) { }

  ngOnInit(): void {
    this.getPokemonsById();
  }

  getPokemonsById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pService.getPokemonsDetails(id).subscribe(pokemons => this.pokemons=pokemons);
  }

}
