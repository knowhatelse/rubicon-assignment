import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabComponent } from './presentation/components/tab/tab.component';
import { SearchComponent } from './presentation/components/search/search.component';
import { MediaContainerComponent } from './presentation/components/media/media-container/media-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TabComponent, SearchComponent, MediaContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rubicon-assignment';
}
