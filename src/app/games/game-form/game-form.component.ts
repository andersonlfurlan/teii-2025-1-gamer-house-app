import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  gameForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
    image: new FormControl(''),
    launchDate: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    platform: new FormControl('')
  });

  constructor() { }

  ngOnInit() { }

}
