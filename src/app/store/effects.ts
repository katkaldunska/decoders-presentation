import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';

import { AuthorListActions } from './actions';
import { AuthorListService } from './service';

@Injectable()
export class AuthorListEffects {
    loadAuthorList$ = createEffect(() => this.actions$.pipe(
        filter(action => [AuthorListActions.LOAD_AUTHOR_LIST, AuthorListActions.LOAD_AUTHOR_LIST_INVALID].includes(action.type)),
        mergeMap(action => this.authorListService.getAuthorList(action.type === AuthorListActions.LOAD_AUTHOR_LIST ? 'default' : 'invalid')
            .pipe(
                map(items => ({type: AuthorListActions.LOAD_AUTHOR_LIST_SUCCESS, payload: items})),
                catchError(error => of({type: AuthorListActions.LOAD_AUTHOR_LIST_FAILURE, payload: error.message}))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private authorListService: AuthorListService
    ) {
    }
}
