import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITabSwitchService } from '../../../core/interfaces/services/i-tab-switch.service';
import { IStateService } from '../../../core/interfaces/services/i-state-service.service';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  selectedTab: string = ' '

  constructor(private tabSwitchService: ITabSwitchService, private stateServie: IStateService) {
    this.setSelectedTab();
  }

  private setSelectedTab() {
    this.selectedTab = this.stateServie.getState().selectedTab;
  }

  private changeTab(tab: string) {
    this.tabSwitchService.switchTab(tab);
  }

  selectTab() {
    if(this.selectedTab === "movies") {
      this.selectedTab = "tv-shows";
      this.changeTab("tv-shows");
    } else {
      this.selectedTab = "movies";
      this.changeTab("movies");
    }
  }
  
}
