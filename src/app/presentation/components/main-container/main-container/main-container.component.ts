import { Component } from '@angular/core';
import { TabComponent } from "../../tab/tab.component";
import { SearchComponent } from "../../search/search.component";
import { MediaContainerComponent } from "../../media/media-container/media-container.component";
import { MediaDetailComponent } from "../../media/media-detail/media-detail.component";

@Component({
    selector: 'app-main-container',
    standalone: true,
    templateUrl: './main-container.component.html',
    styleUrl: './main-container.component.css',
    imports: [TabComponent, SearchComponent, MediaContainerComponent, MediaDetailComponent]
})
export class MainContainerComponent {

}
