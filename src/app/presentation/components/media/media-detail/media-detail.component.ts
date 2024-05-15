import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-detail.component.html',
  styleUrl: './media-detail.component.css'
})
export class MediaDetailComponent {
  isButtonHovered: boolean = false;

  onHover(isHovered: boolean) {
    this.isButtonHovered = isHovered;
  }
    
}
