import { createAction, props } from '@ngrx/store';
import { AuthorItem } from './model';

export const AuthorListActions = {
    LOAD_AUTHOR_LIST: '[Author List] Load Items',
    LOAD_AUTHOR_LIST_INVALID: '[Author List] Load Invalid Items',
    LOAD_AUTHOR_LIST_SUCCESS: '[Author List] Load Items Success',
    LOAD_AUTHOR_LIST_FAILURE: '[Author List] Load Items Failure'
};

export const loadAuthorList = createAction(AuthorListActions.LOAD_AUTHOR_LIST);
export const loadAuthorListInvalid = createAction(AuthorListActions.LOAD_AUTHOR_LIST_INVALID);
export const loadAuthorListSuccess = createAction(AuthorListActions.LOAD_AUTHOR_LIST_SUCCESS, props<{ payload: AuthorItem[] }>());
export const loadAuthorListFailure = createAction(AuthorListActions.LOAD_AUTHOR_LIST_FAILURE, props<{ payload: string}>());
