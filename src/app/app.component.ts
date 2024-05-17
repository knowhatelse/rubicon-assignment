import { Component } from '@angular/core';
import { MainContainerComponent } from "./presentation/components/main-container/main-container/main-container.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MainContainerComponent]
})
export class AppComponent {
  title = 'rubicon-assignment';
}
