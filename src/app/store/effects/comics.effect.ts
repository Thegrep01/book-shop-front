import { Book } from './../models/book.model';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import { tap, switchMap, map, catchError } from 'rxjs/operators';

import * as ComicsActions from '../actions/comics.actions';

import { Observable, of } from 'rxjs';

@Injectable()
export class ComicsEffects {
    constructor(private actions: Actions, private http: HttpClient) { }

    @Effect()
    getBooks = this.actions.pipe(
        ofType(ComicsActions.GET_COMICS_LIST),
        switchMap(() => {
            return this.http.get('http://localhost:8090/commixes/all').pipe(
                map((data: any) => new ComicsActions.GetComicsListSuccess(data.data)),
                catchError(() => of(new ComicsActions.GetComicsListFail()))
            );
        }),
    );

    @Effect()
    getBook = this.actions.pipe(
        ofType(ComicsActions.GET_COMICS_BY_ID),
        map((action: any) => action.payload),
        switchMap((data: any) => {
            return this.http.get(`http://localhost:8090/commixes/comix/${data}`).pipe(
                map((res: any) => new ComicsActions.GetComicsByIDSuccess(res.data)),
                catchError(() => of(new ComicsActions.GetComicsByIDFail()))
        );
        }),
    );

}
