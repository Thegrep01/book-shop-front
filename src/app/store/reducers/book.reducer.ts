import { Book } from './../models/book.model';
import { Action } from '@ngrx/store';
import * as BooksActions from '../actions/books.actions';

export function booksReducer(state: any = [], action: BooksActions.Action) {
    switch (action.type) {
        case BooksActions.GET_BOOK_LIST:
            return [state];
        case BooksActions.GET_BOOK_GET_LIST_SUCCESS:
            return action.payload;
        case BooksActions.GET_BOOK_LIST_FAIL:
            return [...state];
        default:
            return state;
    }
}

export function bookReducer(state: any = {}, action: BooksActions.Action) {
    switch (action.type) {
        case BooksActions.GET_BOOK_BY_ID:
            return state;
        case BooksActions.GET_BOOK_GET_BY_ID_SUCCESS:
            return action.payload;
        case BooksActions.GET_BOOK_BY_ID_FAIL:
            return state;
        default:
            return state;
    }
}
