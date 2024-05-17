import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TabComponent } from "../../tab/tab.component";
import { SearchComponent } from "../../search/search.component";
import { MediaContainerComponent } from "../../media/media-container/media-container.component";
import { MediaDetailComponent } from "../../media/media-detail/media-detail.component";
import { IMovieListsService } from '../../../../core/interfaces/services/movie/i-movie-lists.service';
import { ITvSerieListsService } from '../../../../core/interfaces/services/tv-serie/i-tv-serie-lists.service';
import { ITabSwitchService } from '../../../../core/interfaces/services/i-tab-switch.service';
import { ISearchService } from '../../../../core/interfaces/services/search/i-search.service';

@Component({
    selector: 'app-main-container',
    standalone: true,
    templateUrl: './main-container.component.html',
    styleUrl: './main-container.component.css',
    imports: [TabComponent, SearchComponent, MediaContainerComponent, MediaDetailComponent],
})
export class MainContainerComponent implements OnInit {
    mediaData: any;
    currentTab: string = '';
    currentSearchQuery: string = '';

    constructor(
        private movieListsService: IMovieListsService,
        private tvSerieListsService: ITvSerieListsService,
        private tabSwitchService: ITabSwitchService,
        private changeDetector: ChangeDetectorRef,
        private searchService: ISearchService
    ) { }

    ngOnInit(): void {
        this.search();
        this.tab();
    }

    private tab() {
        this.tabSwitchService.getCurrentTab().subscribe(tab => {
            this.currentTab = tab;
            this.switchTab();
        });
    }

    private switchTab(): void {
        if (this.currentSearchQuery) {
            this.switchSearch(this.currentSearchQuery);
        } else {
            if (this.currentTab === 'movies') {
                this.getTopRatedMovies();
            } else {
                this.getTopRatedTvSeries();
            }
        }
    }

    private getTopRatedMovies(): void {
        this.movieListsService.getTopRadtedMovies().subscribe({
            next: response => {
                this.mediaData = response.slice(0, 10);
                this.changeDetector.detectChanges();
            },
            error: error => console.error(error)
        });
    }

    private getTopRatedTvSeries(): void {
        this.tvSerieListsService.getTopRatedTvSeries().subscribe({
            next: response => {
                this.mediaData = response.slice(0, 10);
                this.changeDetector.detectChanges();
            },
            error: error => console.error(error)
        });
    }

    private search() {
        this.searchService.getSearchQuery().subscribe(sq => {
            this.currentSearchQuery = sq;
            if (sq !== '') {
                this.switchSearch(sq);
            } else {
                this.switchTab();  
            }
        });
    }

    private switchSearch(searchQuery: string) {
        if (this.currentTab === 'movies') {
            this.searchMovies(searchQuery);
        } else {
            this.searchTvSeries(searchQuery);
        }
    }

    private searchMovies(searchQuery: string): void {
        this.searchService.searchMovies(searchQuery).subscribe({
            next: response => {
                this.mediaData = response.filter(
                    item => item.title.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase())
                );
                this.changeDetector.detectChanges();
            },
            error: error => console.error(error)
        });
    }

    private searchTvSeries(searchQuery: string): void {
        this.searchService.searchTvSeries(searchQuery).subscribe({
            next: response => {
                this.mediaData = response.filter(
                    item => item.title.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase())
                );
                this.changeDetector.detectChanges();
            },
            error: error => console.error(error)
        });
    }
}
