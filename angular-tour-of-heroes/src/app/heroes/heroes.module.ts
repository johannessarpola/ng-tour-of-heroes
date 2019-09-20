import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero/hero.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LevelUpModule } from '../level-up/level-up.module';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule, LevelUpModule
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroComponent
  ]
})
export class HeroesModule { }
