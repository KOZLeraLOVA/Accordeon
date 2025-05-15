import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { inject, Injectable} from '@angular/core';



// @ts-ignore

@Component({

  imports: [RouterOutlet ], //ProfileCardComponent
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent {
}
