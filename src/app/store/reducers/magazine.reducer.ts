import { Magazine } from '../models/magazine.model';
import { Action } from '@ngrx/store';
import * as MagazineActions from '../actions/magazine.actions';

export function magazinesReducer(state: any = [], action: MagazineActions.Action) {
    switch (action.type) {
        case MagazineActions.GET_MAGAZINE_LIST:
            return state;
        case MagazineActions.GET_MAGAZINE_GET_LIST_SUCCESS:
            return action.payload;
        case MagazineActions.GET_MAGAZINE_LIST_FAIL:
            return [...state];
        default:
            return state;
    }
}

export function magazineReducer(state: any = {}, action: MagazineActions.Action) {
    switch (action.type) {
        case MagazineActions.GET_MAGAZINE_BY_ID:
            return state;
        case MagazineActions.GET_MAGAZINE_GET_BY_ID_SUCCESS:
            return action.payload;
        case MagazineActions.GET_MAGAZINE_BY_ID_FAIL:
            return state;
        default:
            return state;
    }
}

export function magazineDateReducer(state: any = [], action: MagazineActions.Action) {
    switch (action.type) {
        case MagazineActions.GET_MAGAZINE_DATES:
            return state;
        case MagazineActions.GET_MAGAZINE_DATES_SUCCESS:
            return action.payload;
        case MagazineActions.GET_MAGAZINE_DATES_FAIL:
            return state;
        default:
            return state;
    }
}