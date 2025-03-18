import { Component, OnInit } from '@angular/core';
import { dateMask, priceMask, maskitoElement } from 'src/app/core/constants/mask.constants';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
  standalone: false,
})
export class GameFormComponent implements OnInit {

  dateMask = dateMask;
  priceMask = priceMask;
  maskitoElement = maskitoElement;

  platforms = [
    'Playstation',
    'Xbox',
    'Nintendo Switch',
    'Android',
    'iOS',
    'PC'
  ]

  constructor() { }

  ngOnInit() { }

}
