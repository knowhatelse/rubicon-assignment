import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ISearchService } from '../../../core/interfaces/services/search/i-search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap, takeUntil } from 'rxjs';

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

  constructor(private searchService: ISearchService) { }

  ngOnInit(): void {
    this.search();
  }

  private search() {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(value => {
      if (value.length >= 3) {
        this.searchService.setSearchQuery(value);
      } else {
        this.searchService.setSearchQuery('');
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