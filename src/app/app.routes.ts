import { Routes } from '@angular/router';
import { MainContainerComponent } from './presentation/components/main-container/main-container/main-container.component';
import { MediaDetailComponent } from './presentation/components/media/media-detail/media-detail.component';

export const routes: Routes = [
    {path: '', component: MainContainerComponent},
    {path: 'details/:id', component: MediaDetailComponent},
    {path: '**', component: MainContainerComponent},
];
