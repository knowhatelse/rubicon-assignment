import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TabComponent } from "../../tab/tab.component";
import { SearchComponent } from "../../search/search.component";
import { MediaContainerComponent } from "../../media/media-container/media-container.component";
import { MediaDetailComponent } from "../../media/media-detail/media-detail.component";
import { IMovieListsService } from '../../../../core/interfaces/services/movie/i-movie-lists.service';
import { ITvSerieListsService } from '../../../../core/interfaces/services/tv-serie/i-tv-serie-lists.service';
import { ITabSwitchService } from '../../../../core/interfaces/services/i-tab-switch.service';

@Component({
    selector: 'app-main-container',
    standalone: true,
    templateUrl: './main-container.component.html',
    styleUrl: './main-container.component.css',
    imports: [TabComponent, SearchComponent, MediaContainerComponent, MediaDetailComponent],
})
export class MainContainerComponent implements OnInit {
    mediaData: any;

    constructor(
        private movieListsService: IMovieListsService, 
        private tvSerieListsService: ITvSerieListsService,
        private tabSwitchService: ITabSwitchService,
        private changeDetector: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.tabSwitchService.getCurrentTab().subscribe(tab => {
           this.switchTab(tab);
        })
    }

    private switchTab(currentTab: string): void {
        if(currentTab === 'movies'){
            this.getTopRatedMovies();
        } else {
           this.getTopRatedTvSeries();
        }
    }

    private getTopRatedMovies(): void {
        this.movieListsService.getTopRadtedMovies().subscribe({
            next: response => {
                this.mediaData = response.slice(0,10);
                this.changeDetector.detectChanges();
            },
            error: error => console.error(error)
        })
    }

    private getTopRatedTvSeries(): void {
        this.tvSerieListsService.getTopRatedTvSeries().subscribe({
            next: response => {
                this.mediaData = response.slice(0,10);
                this.changeDetector.detectChanges();
            },
            error: error => console.error(error)
        })
    }
   
}
