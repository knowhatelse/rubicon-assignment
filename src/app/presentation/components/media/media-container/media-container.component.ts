import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MediaCardComponent } from '../media-card/media-card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MediaResultDto } from '../../../../data/dtos/media/media-result.dto';

@Component({
  selector: 'app-media-container',
  standalone: true,
  imports: [MediaCardComponent, CommonModule],
  templateUrl: './media-container.component.html',
  styleUrl: './media-container.component.css'
})
export class MediaContainerComponent implements OnChanges {
  @Input() mediaData: any = {};
  mediaDataPairs: any;

  constructor(private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.mediaDataPairs = this.createMediaDataPairs();
  }

  private createMediaDataPairs(): any[] {
    let pairs: any[] = [];
    for (let i = 0; i < this.mediaData.length; i += 2) {
      pairs.push([this.mediaData[i], this.mediaData[i + 1]])
    }
    return pairs;
  }

  navigateToDetails(md: MediaResultDto) {
    this.router.navigate(['details', md.id], {queryParams: {info: md.type}})
  }

}
