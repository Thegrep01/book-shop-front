import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  public searchResult: Observable<any[]>;

  constructor(private store: Store<AppState>) {
    this.searchResult = this.store.select('searchResult');
  }

  ngOnInit() {
  }
}
