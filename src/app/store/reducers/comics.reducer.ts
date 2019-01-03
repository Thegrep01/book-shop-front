import * as ComicsActions from '../actions/comics.actions';

export function comicsListReducer(state: any = [], action: ComicsActions.Action) {
    switch (action.type) {
        case ComicsActions.GET_COMICS_LIST:
            return state;
        case ComicsActions.GET_COMICS_GET_LIST_SUCCESS:
            return action.payload;
        case ComicsActions.GET_COMICS_LIST_FAIL:
            return [...state];
        default:
            return state;
    }
}

export function comicsReducer(state: any = {}, action: ComicsActions.Action) {
    switch (action.type) {
        case ComicsActions.GET_COMICS_BY_ID:
            return state;
        case ComicsActions.GET_COMICS_GET_BY_ID_SUCCESS:
            return action.payload;
        case ComicsActions.GET_COMICS_BY_ID_FAIL:
            return state;
        default:
            return state;
    }
}
