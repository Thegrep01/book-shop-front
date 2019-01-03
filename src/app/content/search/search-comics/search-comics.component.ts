import { SearchComicsService } from './search-comics.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import * as SearchActions from '../../../store/actions/search.actions';

@Component({
  selector: 'app-search-comics',
  templateUrl: './search-comics.component.html',
  styleUrls: ['./search-comics.component.scss']
})
export class SearchComicsComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder, private store: Store<AppState>, private router: Router,
    private searchComicsService: SearchComicsService
  ) {
    this.searchForm = fb.group({
      'name': '',
      'author': '',
      'painter': '',
      'history': '',
      'Sf': '',
      'drama': '',
      'action': '',
      'adventure': '',
      'romance': '',
      'mystery': '',
      'horror': '',
      'novel': '',
      'bookbinder': ['hardcover'],
      'side': ['left-side']
    });
  }

  ngOnInit() {
  }

  search(value) {
    const req: string = this.searchComicsService.genReq(value);
    this.store.dispatch(new SearchActions.SearchComicsReq(req));
    this.router.navigate(['/search-result']);
  }

}
