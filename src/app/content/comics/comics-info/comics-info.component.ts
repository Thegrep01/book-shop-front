import { Comics } from './../../../store/models/comics.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ActivatedRoute } from '@angular/router';
import * as ComicsActions from '../../../store/actions/comics.actions';

@Component({
  selector: 'app-comics-info',
  templateUrl: './comics-info.component.html',
  styleUrls: ['./comics-info.component.scss']
})
export class ComicsInfoComponent implements OnInit {


  public selectedComics: Observable<Comics>;
  public comics: Comics;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.selectedComics = this.store.select('comics');
    this.selectedComics.subscribe(data => this.comics = data);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new ComicsActions.GetComicsByID(id));
  }

}
