import { Injectable } from '@angular/core';
import { Hero } from './hero.component';
import { HEROS } from './mock-hero';

@Injectable()
export class HeroService{

    getHeros() : Hero[]{
        return HEROS;
    }

}