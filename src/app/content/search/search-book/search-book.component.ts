import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearcBookService } from './search-book.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as SearchActions from '../../../store/actions/search.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  searchForm: FormGroup;
  name: string;
  author: string;

  searchResult: Observable<any>;

  constructor(
    private fb: FormBuilder, private searcBookService: SearcBookService, private store: Store<AppState>, private router: Router
  ) {
    this.searchForm = fb.group({
      'name': '',
      'author': '',
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
    });

    this.searchResult = this.store.select('searchResult');
  }

  ngOnInit() {
  }

  search(value) {
    const req: string = this.searcBookService.genReq(value);
    this.store.dispatch(new SearchActions.SearchBookReq(req));
    this.router.navigate(['/search-result']);
  }

}
