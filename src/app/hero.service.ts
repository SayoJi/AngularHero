import { Injectable } from '@angular/core';
import { Hero } from './hero.component';
import { HEROS } from './mock-hero';

@Injectable()
export class HeroService{
    //get the data from asynchronous
    getHeros() : Promise<Hero[]>{
        return Promise.resolve(HEROS);
    }

}