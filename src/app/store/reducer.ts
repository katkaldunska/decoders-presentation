import { createReducer, on } from '@ngrx/store';
import {
    loadAuthorList,
    loadAuthorListFailure,
    loadAuthorListInvalid,
    loadAuthorListSuccess
} from './actions';
import { AuthorItem } from './model';

export interface AuthorListLoadResult {
    items: AuthorItem[];
    error: string;
    isLoading: boolean;
}

export const initialState: AuthorListLoadResult = {
    items: [],
    error: null,
    isLoading: false
};

const reducer = createReducer(initialState,
    on(loadAuthorList, () => {
        return {...initialState, isLoading: true};
    }),
    on(loadAuthorListInvalid, () => {
        return {...initialState, isLoading: true};
    }),
    on(loadAuthorListSuccess, (state, action) => {
        return {items: action.payload, error: null, isLoading: false};
    }),
    on(loadAuthorListFailure, (state, action) => {
        return {items: null, error: action.payload, isLoading: false};
    })
);

export function authorListReducer(state, action): AuthorListLoadResult {
    return reducer(state, action);
}
