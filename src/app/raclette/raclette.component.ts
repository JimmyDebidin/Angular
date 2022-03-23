import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raclette',
  templateUrl: './raclette.component.html',
  styleUrls: ['./raclette.component.css'],
})
export class RacletteComponent implements OnInit {
  title: string = 'Raclette Party';
  constructor() {}

  ngOnInit(): void {}
  isThisIngredientVital: boolean = true;
  displayGuestList: boolean = true;
  songList: string[] = ['Buffalo soldier', 'Galatée', 'Skyfall', 'Redemption Song'];
}
