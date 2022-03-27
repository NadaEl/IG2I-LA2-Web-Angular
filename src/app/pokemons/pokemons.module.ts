import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatListModule } from '@angular/material/list';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule }  from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PokedexComponent } from './pokedex/pokedex.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    InfiniteScrollModule,
    MatSidenavModule,
  ]
})
export class PokemonsModule { }
