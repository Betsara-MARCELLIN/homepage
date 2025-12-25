import { Component } from '@angular/core';
import { AnimatedArrowDown } from '../../shared/components/animated/animated-arrow-down/animated-arrow-down';
import { CenterizeContainer } from '../../shared/components/centerize-container/centerize-container';

@Component({
  selector: 'app-tour-scroll',
  templateUrl: './tour-scroll.html',
  styleUrl: './tour-scroll.scss',
  standalone: true,
  imports: [CenterizeContainer, AnimatedArrowDown],
})
export class TourScroll {}
