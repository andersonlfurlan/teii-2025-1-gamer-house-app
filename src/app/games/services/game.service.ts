import { Injectable } from '@angular/core';
import { Game } from '../models/game.type';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesList: Game[] = [
    {
      id: 1,
      title: 'Super Mario',
      category: 'plataforma',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gmv4VKSDNsinlRo0hh1CPLhGZlw92tZpjQ&s',
      launchDate: new Date(1985, 8, 13),
      platforms: ['Super Nintendo', 'Playstation', 'Xbox', 'Nintendo 64'],
      price: 10.0
    },
    {
      id: 2,
      title: 'Tetris',
      category: 'plataforma',
      image: 'https://m.media-amazon.com/images/I/61M3rDwh4qL._h1_.png',
      launchDate: new Date(1986, 8, 13),
      platforms: ['Arcade', 'Minigame'],
      price: 1.0
    },
    {
      id: 3,
      title: 'Tetris',
      category: 'plataforma',
      image: null,
      launchDate: new Date(1986, 8, 13),
      platforms: ['Arcade', 'Minigame'],
      price: 1.0
    },
  ];

  constructor() { }

  getById(gameId: number) {
    return this.gamesList.find(g => g.id === gameId);
  }

  getList() {
    return [...this.gamesList];
  }

  private add(game: Game) {
    this.gamesList = [...this.gamesList, {
      ...game,
      id: this.getNextId()
    }];
  }

  private getNextId(): number {
    const maxId = this.gamesList.reduce((id, game) => {
      if (!!game.id && game?.id > id) {
        id = game.id;
      }
      return id;
    }, 0);
    return maxId + 1;
  }

  private update(updatedGame: Game) {
    this.gamesList = this.gamesList.map(g => {
      return (g.id === updatedGame.id) ? updatedGame : g;
    });
  }

  save(game: Game) {
    game.id ? this.update(game) : this.add(game);
  }

  remove(game: Game) {
    this.gamesList = this.gamesList.filter(g => g.id !== game.id);
  }
}
