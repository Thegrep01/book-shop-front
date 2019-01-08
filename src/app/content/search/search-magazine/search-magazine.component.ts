import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearcMagazineService } from './search-magazine.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as SearchActions from '../../../store/actions/search.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetMagazinesDates } from 'src/app/store/actions/magazine.actions';

@Component({
  selector: 'app-search-magazine',
  templateUrl: './search-magazine.component.html',
  styleUrls: ['./search-magazine.component.scss']
})
export class SearchMagazineComponent implements OnInit {

  searchForm: FormGroup;
  searchResult: Observable<any>;
  searchDate: Observable<any[]>;

  constructor(
    private fb: FormBuilder, private searcMagazineService: SearcMagazineService, private store: Store<AppState>, private router: Router
  ) {
    this.searchForm = fb.group({
      'name': '',
      'history': '',
      'Sf': '',
      'drama': '',
      'action': '',
      'adventure': '',
      'romance': '',
      'mystery': '',
      'horror': '',
      'novel': ''
    });
    this.searchDate = this.store.select('dates');
  }

  ngOnInit() {
    this.store.dispatch(new GetMagazinesDates());
  }

  search(value) {
    const req: string = this.searcMagazineService.genReq(value);
    this.store.dispatch(new SearchActions.SearchMagazineReq(req));
    this.router.navigate(['/search-result']);
  }

}
