import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showMyInfoChecker = false;
  showServices = false;

  title = 'The best Youtuber';
  name = 'Emo';
  myInfo = { name: 'Emo', age: 22 };
  hobbies = ['Четене на книги', 'Бягане', 'Колоездене'];
  favoriteContentCreator = {
    name: 'PewDiePie',
    link: 'https://www.youtube.com/user/pewdiepie',
  };
  channelInfo = {
    name: 'Emo channel',
    description: 'I am a BG youtuber',
    influence: 'I make people happy',
  };
  services = [
    {
      name: 'Video editing',
      price: 20,
    },
    {
      name: 'Ads shoot',
      price: 150,
    },
    {
      name: 'Account manager',
      price: 350,
    },
  ];

  toggleMyInfo() {
    this.showMyInfoChecker = !this.showMyInfoChecker;
  }

  toggleMyServices() {
    this.showServices = !this.showServices;
  }
}
