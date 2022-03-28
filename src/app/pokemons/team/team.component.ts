import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'sw-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor( private teamService : TeamService , private pokemonService: PokemonService) { }

  @Output() pokemonDisplay = new EventEmitter<Pokemon>();
  accessToken ?: string;
  pokemons: Pokemon[] = [];
  
  ngOnInit(): void {
    // connexion avec l'api
    this.teamService.connexion().subscribe(rs => {
      console.log("1\n"+rs.access_token) 
      this.accessToken = rs.access_token
      this.teamService.teamToken = rs.access_token
      this.teamService.getTeam().subscribe(teamIds => {
        this.teamService.teamIds = teamIds
        console.log(this.teamService.teamIds)
        this.getPokemonsTeam()
      })
    } )

  }


  deletePokemonFromTeam(pk?: Pokemon){
    if(pk)
      this.teamService.removePokemonFromTeam(pk.id)
  }

  getPokemonsTeam() {
      this.teamService.getTeam().pipe(
        switchMap(arrayIds => {
          const pokemonObservables : Observable<Pokemon>[] = arrayIds.map((id: number) => this.pokemonService.getPokemonsDetails(id))
          return forkJoin(pokemonObservables);
        })
      ).subscribe(arrayPokemons => this.pokemons = arrayPokemons)
  }

  afficherPokemonDetail(pk : Pokemon){
    this.pokemonDisplay.emit(pk)
  }

}
