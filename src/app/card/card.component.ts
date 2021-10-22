import { Component, Input } from '@angular/core';
import TMDBMovie from 'src/models/TMDBMovie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() movie!: TMDBMovie


}
