import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from "./presentation/components/main-container/main-container/main-container.component";

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
