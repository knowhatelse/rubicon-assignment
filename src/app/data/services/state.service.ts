import { Injectable } from '@angular/core';
import { IStateService } from '../../core/interfaces/services/i-state-service.service';
import { State } from '../../core/models/other/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService implements IStateService{
  selectedTab: string = 'tv-shows';
  querySearch: string = ' ';

  constructor() { }

  setTabState(param: string): void {
    this.selectedTab = param;
  }

  setQuerySearchState(param: string): void {
    this.querySearch = param
  }
 

  getState(): State {
    return {
      selectedTab: this.selectedTab,
      querySeach: this.querySearch
    };
  }
}
