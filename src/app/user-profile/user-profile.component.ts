import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: "L'expérience, c'est le nom que chacun donne à ses erreurs.",
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  constructor() {}

  ngOnInit(): void {}

  isShow = true;
  showAge() {
    this.isShow = !this.isShow;
  }
}
