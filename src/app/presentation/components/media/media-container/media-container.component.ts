import { Component } from '@angular/core';
import { MediaCardComponent } from '../media-card/media-card.component';

@Component({
  selector: 'app-media-container',
  standalone: true,
  imports: [MediaCardComponent],
  templateUrl: './media-container.component.html',
  styleUrl: './media-container.component.css'
})
export class MediaContainerComponent {

}
