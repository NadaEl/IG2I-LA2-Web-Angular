import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Token } from './token.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamIds: number[] = [];
  subject = new Subject<number[]>()
  teamToken ?: string

  constructor(private http: HttpClient) { }

  // creer methode connexion api

  connexion(): Observable<Token>{
    return this.http.post<Token>('http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/auth/login',{"email": "nada.el-atlassi@ig2i.centralelille.fr","password": "azerty"});
  }

  // creer methode récuperer mon equipe

  getTeam(): Observable<Array<number>>{
    return this.http.get<Array<number>>('http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/trainers/me/team',
    {headers: new HttpHeaders({'Authorization':"Bearer " + this.teamToken})})
  }

  // creer methode update team

  setTeam(team : number[]): Observable<[number]>{
    return this.http.put<[number]>('http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/trainers/me/team', 
    team,
    {headers: new HttpHeaders({'Authorization':"Bearer " + this.teamToken})})
  }

  // creer methode supprimer un poke de mon equipe

  removePokemonFromTeam(id: number){
    var hasDeleted: boolean = false;
    this.teamIds.forEach((element,index)=>{
      if(element==id && !hasDeleted)
      {
        hasDeleted = true
        this.teamIds.splice(index, 1)
        this.setTeam(this.teamIds).subscribe(_ => {
          this.subject.next(this.teamIds)
        })
      }
    });
  }

  // creer methode ajouter poke a mon equipe

  addPokemonToTeam( id: number){
    console.log(`pokemon added : ${id}`)
    if(this.teamIds.length < 6) {
      this.teamIds.push(id)
      this.setTeam(this.teamIds).subscribe(_ => {
        this.subject.next(this.teamIds)
      })
    }
  }


}
