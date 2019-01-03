import * as SearchActions from '../actions/search.actions';

export function searchReducer(state: any = [], action: SearchActions.Action) {
    switch (action.type) {
        case SearchActions.SEARCH_BOOK_REQ:
            return state;
        case SearchActions.SEARCH_COMICS_REQ:
            return state;
        case SearchActions.SEARCH_REQ_SUCCESS:
            return action.payload;
        case SearchActions.SEARCH_REQ_FAIL:
            return state;
        default:
            return state;
    }
}
