import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ISearchService } from '../../../core/interfaces/services/search/i-search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { IStateService } from '../../../core/interfaces/services/i-state-service.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  isInputActive: boolean = false;
  searchControl = new FormControl();
  searchText: string = '';

  constructor(private searchService: ISearchService, private stateService: IStateService) { 
  }

  ngOnInit(): void {
    //this.searchText = this.stateService.getState().querySeach;
    this.search();
  }

  private search() {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(value => {
      if (value.length >= 3) {
        this.searchService.setSearchQuery(value);
        this.stateService.setQuerySearchState(value);
      } else {
        this.searchService.setSearchQuery('');
        this.stateService.setQuerySearchState('');
      }
    });
  }

  inputFocus() {
    this.isInputActive = true;
  }

  inputBlur() {
    this.isInputActive = false;
  }
}
