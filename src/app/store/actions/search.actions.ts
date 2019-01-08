import { Action } from '@ngrx/store';

export const SEARCH_BOOK_REQ = '[SEARCH] Search books req';
export const SEARCH_COMICS_REQ = '[SEARCH] Search comics req';
export const SEARCH_MAGAZINE_REQ = '[SEARCH] Search magazines req';

export const SEARCH_REQ_SUCCESS = '[SEARCH] Search SUCCESS';
export const SEARCH_REQ_FAIL = '[SEARCH] Search FAIL';

export class SearchBookReq implements Action {
    readonly type = SEARCH_BOOK_REQ;

    constructor(public payload: any) { }
}

export class SearchReqSuccess implements Action {
    readonly type = SEARCH_REQ_SUCCESS;

    constructor(public payload: any) { }
}

export class SearchReqFail implements Action {
    readonly type = SEARCH_REQ_FAIL;

}

export class SearchComicsReq implements Action {
    readonly type = SEARCH_COMICS_REQ;

    constructor(public payload: any) { }
}
export class SearchMagazineReq implements Action {
    readonly type = SEARCH_MAGAZINE_REQ;

    constructor(public payload: any) { }
}



export type Action = SearchBookReq
    | SearchReqSuccess
    | SearchReqFail
    | SearchComicsReq
    | SearchMagazineReq;


