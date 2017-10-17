import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-hero';

@Injectable()
export class HeroService {
    // get the data from asynchronous
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROS);
    }
    // get hero by id
    getHero(id: number): Promise<Hero> {
        return this.getHeros().then(heros => heros.find(hero => hero.id === id));
    }
    // simulate server latency eith 2 second.
    getHerosSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeros()), 2000);
        });
    }
}
