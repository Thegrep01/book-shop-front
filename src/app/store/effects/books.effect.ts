import { Book } from './../models/book.model';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import { tap, switchMap, map, catchError } from 'rxjs/operators';

import * as BooksActions from '../actions/books.actions';

import { Observable, of } from 'rxjs';

@Injectable()
export class BooksEffects {
    constructor(private actions: Actions, private http: HttpClient) { }

    @Effect()
    getBooks = this.actions.pipe(
        ofType(BooksActions.GET_BOOK_LIST),
        switchMap(() => {
            return this.http.get('http://localhost:8090/books/all').pipe(
                map((data: any) => new BooksActions.GetBooksListSuccess(data.data)),
                catchError(() => of(new BooksActions.GetBooksListFail()))
            );
        }),
    );

    @Effect()
    getBook = this.actions.pipe(
        ofType(BooksActions.GET_BOOK_BY_ID),
        map((action: any) => action.payload),
        switchMap((data: any) => {
            return this.http.get(`http://localhost:8090/books/book/${data}`).pipe(
                map((res: any) => new BooksActions.GetBookByIDSuccess(res.data)),
                catchError(() => of(new BooksActions.GetBookByIDFail()))
        );
        }),
    );

}
