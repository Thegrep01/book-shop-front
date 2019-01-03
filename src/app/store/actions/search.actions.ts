import { Action } from '@ngrx/store';

export const SEARCH_BOOK_REQ = '[SEARCH] Search books req';
export const SEARCH_BOOK_REQ_SUCCESS = '[SEARCH] Search books SUCCESS';
export const SEARCH_BOOK_REQ_FAIL = '[SEARCH] Search books FAIL';

export class SearchBookReq implements Action {
    readonly type = SEARCH_BOOK_REQ;

    constructor(public payload: any) { }
}

export class SearchBookReqSuccess implements Action {
    readonly type = SEARCH_BOOK_REQ_SUCCESS;

    constructor(public payload: any) { }
}

export class SearchBookReqFail implements Action {
    readonly type = SEARCH_BOOK_REQ_FAIL;

}

export type Action = SearchBookReq
    | SearchBookReqSuccess
    | SearchBookReqFail;


