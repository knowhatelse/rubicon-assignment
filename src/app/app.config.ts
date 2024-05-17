import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IMovieListsService } from './core/interfaces/services/movie/i-movie-lists.service';
import { MovieListsService } from './data/services/movie/movie-lists.service';
import { IMovieListsRepository } from './core/interfaces/repositories/movie/i-movie-lists.repository';
import { MovieListsRepository } from './data/repositories/movie/movie-lists.repository';
import { provideHttpClient } from '@angular/common/http';
import { MovieResultMapper } from './data/mapper/movie/movie-result.mapper';
import { MovieService } from './data/services/movie/movie.service';
import { IMovieService } from './core/interfaces/services/movie/i-movie.service';
import { SearchService } from './data/services/search/search.service';
import { ISearchService } from './core/interfaces/services/search/i-search.service';
import { TvSerieListsService } from './data/services/tv-serie/tv-serie-lists.service';
import { ITvSerieListsService } from './core/interfaces/services/tv-serie/i-tv-serie-lists.service';
import { TvSerieService } from './data/services/tv-serie/tv-serie.service';
import { ITvSerieService } from './core/interfaces/services/tv-serie/i-tv-serie.service';
import { ConfigurationService } from './data/services/configuration.service';
import { IConfigurationService } from './core/interfaces/services/i-configuration.service';
import { MovieRepository } from './data/repositories/movie/movie.repository';
import { IMovieRepository } from './core/interfaces/repositories/movie/i-movie.repository';
import { SearchRepository } from './data/repositories/search/search.repository';
import { ISearchRepository } from './core/interfaces/repositories/search/i-search.repository';
import { ITvSerieListsRepository } from './core/interfaces/repositories/tv-serie/i-tv-serie-lists.repository';
import { TvSerieListsRepository } from './data/repositories/tv-serie/tv-serie-lists.repository';
import { TvSerieRepository } from './data/repositories/tv-serie/tv-serie.repository';
import { ITvSerieRepository } from './core/interfaces/repositories/tv-serie/i-tv-serie.repository';
import { TabSwitchService } from './data/services/tab-switch.service';
import { ITabSwitchService } from './core/interfaces/services/i-tab-switch.service';
import { TvSerieResultMapper } from './data/mapper/tv-serie/tv-serie-result.mapper';
import { MovieDetailsMapper } from './data/mapper/movie/movie-details.mapper';
import { VideoResultMapper } from './data/mapper/media/video-result.mapper';
import { TvSerieDetailsMapper } from './data/mapper/tv-serie/tv-serie-details.mapper';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideRouter(routes),
    MovieResultMapper,
    MovieDetailsMapper,
    VideoResultMapper,
    TvSerieResultMapper,
    TvSerieDetailsMapper,
    { provide: IConfigurationService, useClass: ConfigurationService},
    { provide: ITabSwitchService, useClass: TabSwitchService},
    { provide: IMovieListsService, useClass: MovieListsService },
    { provide: IMovieService, useClass: MovieService },
    { provide: ISearchService, useClass: SearchService },
    { provide: ITvSerieListsService, useClass: TvSerieListsService },
    { provide: ITvSerieService, useClass: TvSerieService },
    { provide: IMovieListsRepository, useClass: MovieListsRepository},
    { provide: IMovieRepository, useClass: MovieRepository},
    { provide: ISearchRepository, useClass: SearchRepository},
    { provide: ITvSerieListsRepository, useClass: TvSerieListsRepository},
    { provide: ITvSerieRepository, useClass: TvSerieRepository},
  ]
};
