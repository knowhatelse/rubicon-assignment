import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isInputActive: boolean = false;

  inputFocus() {
    this.isInputActive = true;
  }

  inputBlur(){
    this.isInputActive = false;
  }
}
