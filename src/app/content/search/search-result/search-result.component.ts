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
  public type: string;

  constructor(private store: Store<AppState>) {
    this.searchResult = this.store.select('searchResult');
    this.searchResult.subscribe(data => {
      if (data[0] && data[0].painter) {
        this.type = 'comics';
      } else {
        this.type = 'book';
      }
    });
  }

  ngOnInit() {
  }
}
