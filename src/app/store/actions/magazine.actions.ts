import { Magazine } from '../models/magazine.model';
import { Action } from '@ngrx/store';

export const GET_MAGAZINE_LIST = '[MAGAZINE] Get all magazines';
export const GET_MAGAZINE_GET_LIST_SUCCESS = '[MAGAZINE] Get all magazines SUCCESS';
export const GET_MAGAZINE_LIST_FAIL = '[MAGAZINE] Get all magazines FAIL';

export const GET_MAGAZINE_BY_ID = '[MAGAZINE] Get magazine';
export const GET_MAGAZINE_GET_BY_ID_SUCCESS = '[MAGAZINE] Get magazine SUCCESS';
export const GET_MAGAZINE_BY_ID_FAIL = '[MAGAZINE] Get magazine FAIL';

export const GET_MAGAZINE_DATES = '[MAGAZINE] Get magazines dates';
export const GET_MAGAZINE_DATES_SUCCESS = '[MAGAZINE] Get magazines dates SUCCESS';
export const GET_MAGAZINE_DATES_FAIL = '[MAGAZINE] Get magazines dates FAIL';


export class GetMagazineList implements Action {
    readonly type = GET_MAGAZINE_LIST;
}

export class GetMagazineListSuccess implements Action {
    readonly type = GET_MAGAZINE_GET_LIST_SUCCESS;

    constructor(public payload: any[]) { }
}


export class GetMagazineListFail implements Action {
    readonly type = GET_MAGAZINE_LIST_FAIL;
}

export class GetMagazineByID implements Action {
    readonly type = GET_MAGAZINE_BY_ID;

    constructor(public payload: any) { }

}

export class GetMagazineByIDSuccess implements Action {
    readonly type = GET_MAGAZINE_GET_BY_ID_SUCCESS;

    constructor(public payload: any) { }
}

export class GetMagazineByIDFail implements Action {
    readonly type = GET_MAGAZINE_BY_ID_FAIL;
}

export class GetMagazinesDates implements Action {
    readonly type = GET_MAGAZINE_DATES;
}

export class GetMagazineDatesSuccess implements Action {
    readonly type = GET_MAGAZINE_DATES_SUCCESS;

    constructor(public payload: any) { }
}

export class GetMagazineDatesFail implements Action {
    readonly type = GET_MAGAZINE_DATES_FAIL;
}


export type Action = GetMagazineList
    | GetMagazineListSuccess
    | GetMagazineListFail
    | GetMagazineByID
    | GetMagazineByIDSuccess
    | GetMagazineByIDFail
    | GetMagazinesDates
    | GetMagazineDatesSuccess
    | GetMagazineDatesFail
