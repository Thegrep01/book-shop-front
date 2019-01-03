import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import { tap, switchMap, map, catchError } from 'rxjs/operators';

import * as SearchActions from '../actions/search.actions';

import { Observable, of } from 'rxjs';

@Injectable()
export class SearchEffects {
    constructor(private actions: Actions, private http: HttpClient) { }

    @Effect()
    getBook = this.actions.pipe(
        ofType(SearchActions.SEARCH_BOOK_REQ),
        map((action: any) => action.payload),
        switchMap((data: any) => {
            return this.http.get(`http://localhost:8090/books/search/${data}`).pipe(
                map((res: any) => new SearchActions.SearchBookReqSuccess(res.data)),
                catchError(() => of(new SearchActions.SearchBookReqFail()))
        );
        }),
    );

}
