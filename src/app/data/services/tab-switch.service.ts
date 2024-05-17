import { Injectable } from '@angular/core';
import { ITabSwitchService } from '../../core/interfaces/services/i-tab-switch.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IConfigurationService } from '../../core/interfaces/services/i-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class TabSwitchService implements ITabSwitchService {
  private selectedTab = new BehaviorSubject<string>('tv-shows');
  private tab$ = this.selectedTab.asObservable();

  switchTab(tab: string): void {
    this.selectedTab.next(tab);
  }

  getCurrentTab(): Observable<string> {
    return this.tab$;
  }
}
