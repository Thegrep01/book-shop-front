import { Magazine } from '../models/magazine.model';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import { tap, switchMap, map, catchError } from 'rxjs/operators';

import * as MagazineActions from '../actions/magazine.actions';

import { Observable, of } from 'rxjs';

@Injectable()
export class MagazineEffects {
    constructor(private actions: Actions, private http: HttpClient) { }

    @Effect()
    getMagazines = this.actions.pipe(
        ofType(MagazineActions.GET_MAGAZINE_LIST),
        switchMap(() => {
            return this.http.get('http://localhost:8090/magazines/all').pipe(
                map((data: any) => new MagazineActions.GetMagazineListSuccess(data.data)),
                catchError(() => of(new MagazineActions.GetMagazineListFail()))
            );
        }),
    );

    @Effect()
    getMagazine = this.actions.pipe(
        ofType(MagazineActions.GET_MAGAZINE_BY_ID),
        map((action: any) => action.payload),
        switchMap((data: any) => {
            return this.http.get(`http://localhost:8090/magazines/magazine/${data}`).pipe(
                map((res: any) => new MagazineActions.GetMagazineByIDSuccess(res.data)),
                catchError(() => of(new MagazineActions.GetMagazineByIDFail()))
        );
        }),
    );

    @Effect()
    getMagazinesDates = this.actions.pipe(
        ofType(MagazineActions.GET_MAGAZINE_DATES),
        switchMap(() => {
            return this.http.get('http://localhost:8090/magazines/date').pipe(
                map((data: any) => new MagazineActions.GetMagazineDatesSuccess(data.data)),
                catchError(() => of(new MagazineActions.GetMagazineDatesFail()))
            );
        }),
    );
}
