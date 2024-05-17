import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  selectedTab: string = "movies"

  selectTab() {
    if(this.selectedTab === "movies") {
      this.selectedTab = "tv-shows";
    } else {
      this.selectedTab = "movies";
    }
  }
}
