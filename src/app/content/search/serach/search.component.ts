import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  selectedCategory: string;
  categories: string[] = ['Books', 'Comics', 'Magazine'];

  constructor() { }

  ngOnInit() {
  }

}
