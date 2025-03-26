import { Injectable } from '@angular/core';
import { Game } from '../models/game.type';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesList: Game[] = [
    {
      title: 'Super Mario',
      category: 'plataforma',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gmv4VKSDNsinlRo0hh1CPLhGZlw92tZpjQ&s',
      launchDate: new Date(1985, 8, 13),
      platforms: ['Super Nintendo', 'Playstation', 'Xbox', 'Nintendo 64'],
      price: 10.0
    },
    {
      title: 'Tetris',
      category: 'plataforma',
      image: 'https://m.media-amazon.com/images/I/61M3rDwh4qL._h1_.png',
      launchDate: new Date(1986, 8, 13),
      platforms: ['Arcade', 'Minigame'],
      price: 1.0
    },
  ];

  constructor() { }

  getList() {
    return [...this.gamesList];
  }

  add(game: Game) {
    this.gamesList = [...this.gamesList, game];  }

}
