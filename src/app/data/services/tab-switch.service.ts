import { Injectable } from '@angular/core';
import { ITabSwitchService } from '../../core/interfaces/services/i-tab-switch.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IStateService } from '../../core/interfaces/services/i-state-service.service';

@Injectable({
  providedIn: 'root'
})
export class TabSwitchService implements ITabSwitchService {
  private selectedTab = new BehaviorSubject<string>('tv-shows');
  private tab$ = this.selectedTab.asObservable();
  
  constructor(private stateService: IStateService){}

  switchTab(tab: string): void {
    this.selectedTab.next(tab);
    this.stateService.setTabState(tab);
  }

  getCurrentTab(): Observable<string> {
    return this.tab$;
  }
}
