import { Magazine } from '../../../store/models/magazine.model';
import { AppState } from '../../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MagazineActions from '../../../store/actions/magazine.actions';
import { Observable } from 'rxjs';
import { GetMagazineList } from '../../../store/actions/magazine.actions';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.scss']
})
export class MagazineListComponent implements OnInit {

  public magazineList: Observable<Magazine[]>;

  constructor(private store: Store<AppState>) {
    this.magazineList = this.store.select('magazineList');
  }

  ngOnInit() {
    this.store.dispatch(new GetMagazineList());
  }

}
