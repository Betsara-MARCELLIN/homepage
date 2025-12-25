import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TourScroll } from './features/tour-scroll/tour-scroll';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TourScroll],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-app');
}
