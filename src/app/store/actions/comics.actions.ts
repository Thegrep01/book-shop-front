import { Action } from '@ngrx/store';

export const GET_COMICS_LIST = '[Comics] Get all Comics';
export const GET_COMICS_GET_LIST_SUCCESS = '[Comics] Get all Comics SUCCESS';
export const GET_COMICS_LIST_FAIL = '[Comics] Get all Comics FAIL';

export const GET_COMICS_BY_ID = '[Comics] Get Comics';
export const GET_COMICS_GET_BY_ID_SUCCESS = '[Comics] Get Comics SUCCESS';
export const GET_COMICS_BY_ID_FAIL = '[Comics] Get Comics FAIL';


export class GetComicsList implements Action {
    readonly type = GET_COMICS_LIST;
}

export class GetComicsListSuccess implements Action {
    readonly type = GET_COMICS_GET_LIST_SUCCESS;

    constructor(public payload: any[]) { }
}


export class GetComicsListFail implements Action {
    readonly type = GET_COMICS_LIST_FAIL;
}

export class GetComicsByID implements Action {
    readonly type = GET_COMICS_BY_ID;

    constructor(public payload: any) { }

}

export class GetComicsByIDSuccess implements Action {
    readonly type = GET_COMICS_GET_BY_ID_SUCCESS;

    constructor(public payload: any) { }
}

export class GetComicsByIDFail implements Action {
    readonly type = GET_COMICS_BY_ID_FAIL;
}


export type Action = GetComicsList
    | GetComicsListSuccess
    | GetComicsListFail
    | GetComicsByID
    | GetComicsByIDSuccess
    | GetComicsByIDFail;
