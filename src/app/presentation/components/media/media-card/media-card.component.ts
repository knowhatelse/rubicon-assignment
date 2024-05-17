import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IConfigurationService } from '../../../../core/interfaces/services/i-configuration.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.css'
})
export class MediaCardComponent implements OnChanges {
  @Input() mediaObject: any = {};
  imageFullUrl: string | undefined;

  constructor(private config: IConfigurationService) {
    this.setImageApiUrl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setImageFullUrl();
  }

  private setImageFullUrl(): void {
    this.imageFullUrl += this.mediaObject.poster_path;
  }

  private setImageApiUrl(): void {
    this.imageFullUrl = this.config.getApiUrlImages();
  }

}
