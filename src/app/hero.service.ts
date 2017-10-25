import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import { HEROS } from './mock-hero';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroUrl = 'api/heros'; // web api Url
  constructor(private http: Http) {
  }
    // get the data from asynchronous
    getHeros(): Promise<Hero[]> {
        return this.http.get(this.heroUrl).toPromise().then(
          response => response.json().data as Hero[])
          .catch(this.handleError);
    }

    // handle http error
    private handleError(error: any): Promise<Hero[]> {
      console.error('An error occurred when get data from http', error);
      return Promise.reject(error.message || error);
    }
    // get hero by id
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroUrl}/:${id}`;
        return this.http.get(url)
        .toPromise().then(response => response.json().data as Hero)
        .catch(this.handleError);
        // return this.getHeros().then(heros => heros.find(hero => hero.id === id));
    }
    // simulate server latency eith 2 second.
    getHerosSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeros()), 2000);
        });
    }
}
