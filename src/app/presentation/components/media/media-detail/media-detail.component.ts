import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovieService } from '../../../../core/interfaces/services/movie/i-movie.service';
import { IConfigurationService } from '../../../../core/interfaces/services/i-configuration.service';
import { ITvSerieService } from '../../../../core/interfaces/services/tv-serie/i-tv-serie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-detail.component.html',
  styleUrl: './media-detail.component.css'
})
export class MediaDetailComponent implements OnInit {
  isButtonHovered: boolean = false;
  mediaId!: string | null;
  mediaType!: string | null;
  media: any = {};
  mediaTrailer: any | null;
  imageFullUrl: string | undefined;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private movieService: IMovieService,
    private tvSerieService: ITvSerieService,
    private config: IConfigurationService,
    private snatizer: DomSanitizer
  ) { 
    this.getMediaInfo();
    this.setImageApiUrl();
  }

  ngOnInit(): void {
    this.detectService();
  }

  private detectService() {
    if(this.mediaId !== null){
      if(this.mediaType === 'movie'){
        this.getMovieData(parseInt(this.mediaId));
      } else {
        this.getTvSerieData(parseInt(this.mediaId));
      }
    }
  }

  private getMediaInfo() {
    this.mediaId = this.route.snapshot.paramMap.get('id');
    this.mediaType = this.route.snapshot.queryParamMap.get('info');
  }

  private setImageApiUrl(): void {
    this.imageFullUrl = this.config.getApiUrlImages();
  }

  private setImageFullUrl() {
    this.imageFullUrl += this.media.poster_path;
  }

  private getMovieData(id: number): void {
    this.getMovieDetails(id);
    this.getMovieVideos(id);
  }

  private getMovieDetails(id: number): void {
    this.movieService.getMovieDetails(id).subscribe({
      next: response => {
        this.media = response;
        this.setImageFullUrl();
      },
      error: error => console.error(error)
    });
  }

  private getMovieVideos(id:number): void{
    this.movieService.getMovieVideos(id).subscribe({
      next: response => {
        this.mediaTrailer = response.filter((video:any)=>video.type === 'Trailer');
      },
      error: error => console.error(error)
    });
  }

  private getTvSerieData(id: number): void {
    this.getTvSerieDetails(id);
    this.getTvSerieVideos(id);
  }

  private getTvSerieDetails(id: number): void {
    this.tvSerieService.getTvSerieDetails(id).subscribe({
      next: response => {
        this.media = response;
        this.setImageFullUrl();
      },
      error: error => console.error(error)
    });
  }

  private getTvSerieVideos(id: number): void {
    this.tvSerieService.getTvSerieVideos(id).subscribe({
      next: response => {
        this.mediaTrailer = response.filter((video:any)=>video.type === 'Trailer');
      },
      error: error => console.error(error)
    });
  }

  getVideoUrl(): SafeResourceUrl  {
    if (this.mediaTrailer && this.mediaTrailer.length > 0) {
      const videoUrl = this.config.getYouTubeUrl() + this.mediaTrailer[0].key;
      return this.snatizer.bypassSecurityTrustResourceUrl(videoUrl);
    }
    return ' ';
  }

  onHover(isHovered: boolean) {
    this.isButtonHovered = isHovered;
  }

  navigateToMedia() {
    this.router.navigateByUrl('');
  }

}
