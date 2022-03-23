import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-abc',
  templateUrl: './block-abc.component.html',
  styleUrls: ['./block-abc.component.css'],
})
export class BlockAbcComponent implements OnInit {
  blocText = 'A B C';
  imageSrc = 'https://via.placeholder.com/350x150';
  nom = 'bob';

  constructor() {}

  ngOnInit(): void {}

  direBonjour() {
    console.log('hey');
  }
}
