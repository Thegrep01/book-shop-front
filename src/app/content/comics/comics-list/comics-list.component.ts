import { Comics } from './../../../store/models/comics.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as ComicsActions from '../../../store/actions/comics.actions';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit {

  public comicsList: Observable<Comics[]>;

  constructor(private store: Store<AppState>) {
    this.comicsList = store.select('comicsList');
  }

  ngOnInit() {
    this.store.dispatch(new ComicsActions.GetComicsList());
  }

}
