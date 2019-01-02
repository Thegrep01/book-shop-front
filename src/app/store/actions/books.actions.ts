import { Book } from './../models/book.model';
import { Action } from '@ngrx/store';

export const GET_BOOK_LIST = '[BOOK] Get all books';
export const GET_BOOK_GET_LIST_SUCCESS = '[BOOK] Get all books SUCCESS';
export const GET_BOOK_LIST_FAIL = '[BOOK] Get all books FAIL';

export const GET_BOOK_BY_ID = '[BOOK] Get book';
export const GET_BOOK_GET_BY_ID_SUCCESS = '[BOOK] Get book SUCCESS';
export const GET_BOOK_BY_ID_FAIL = '[BOOK] Get book FAIL';


export class GetBooksList implements Action {
    readonly type = GET_BOOK_LIST;
}

export class GetBooksListSuccess implements Action {
    readonly type = GET_BOOK_GET_LIST_SUCCESS;

    constructor(public payload: any[]) { }
}


export class GetBooksListFail implements Action {
    readonly type = GET_BOOK_LIST_FAIL;
}

export class GetBookByID implements Action {
    readonly type = GET_BOOK_BY_ID;

    constructor(public payload: any) { }

}

export class GetBookByIDSuccess implements Action {
    readonly type = GET_BOOK_GET_BY_ID_SUCCESS;

    constructor(public payload: any) { }
}

export class GetBookByIDFail implements Action {
    readonly type = GET_BOOK_BY_ID_FAIL;
}


export type Action = GetBooksList
    | GetBooksListSuccess
    | GetBooksListFail
    | GetBookByID
    | GetBookByIDSuccess
    | GetBookByIDFail;
