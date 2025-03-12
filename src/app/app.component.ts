import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home'},
    { title: 'Jogos', url: '/games', icon: 'game-controller' },
    { title: 'Estúdios', url: '/studios', icon: 'color-palette' },
  ];

  constructor() { }
}
