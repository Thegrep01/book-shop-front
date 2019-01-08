import { Magazine } from './../../../store/models/magazine.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

import * as MagazineActions from '../../../store/actions/magazine.actions';
import { GetMagazineByID } from '../../../store/actions/magazine.actions';

@Component({
  selector: 'app-magazine-info',
  templateUrl: './magazine-info.component.html',
  styleUrls: ['./magazine-info.component.scss']
})
export class MagazineInfoComponent implements OnInit {

  public selectedMagazine: Observable<Magazine>;
  public magazine: Magazine;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.selectedMagazine = this.store.select('magazine');
    this.selectedMagazine.subscribe(data => this.magazine = data);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new GetMagazineByID(id));
  }

}
