import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ScannedActionsSubject, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AuthorListStore } from '../../../store';
import { AuthorListLoadResult } from '../../../store/reducer';
import { AuthorListActions, loadAuthorList, loadAuthorListInvalid } from '../../../store/actions';
import { AuthorItem } from '../../../store/model';
import { AuthorListService } from '../../../store/service';

@Component({
    selector: 'app-example-template',
    templateUrl: './example-template.component.html'
})
export class ExampleTemplateComponent implements OnInit, OnDestroy {
    @Input() case = 'default';
    public authorList$: Observable<AuthorListLoadResult>;
    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store<AuthorListStore>,
        private actions$: ScannedActionsSubject,
        private authorListService: AuthorListService
    ) {
    }

    ngOnInit(): void {
        if (this.case === 'default') {
            this.loadWithDecoder();
        } else if (this.case === 'invalid_with_decoder') {
            this.loadWithDecoder(true);
        } else if (this.case === 'invalid') {
            this.authorList$ = this.authorListService.getAuthorListInvalid().pipe(map(items => ({
                items,
                isLoading: false,
                error: ''
            })));
        } else if (this.case === 'object_object') {
            this.authorList$ = this.authorListService.getAuthorListObjectObject().pipe(map(items => ({
                items,
                isLoading: false,
                error: ''
            })));
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    public sortedBooks(item: AuthorItem): string[] {
        return item.books.sort();
    }

    private loadWithDecoder(getInvalidData: boolean = false): void {
        this.authorList$ = this.store.select(state => state.authorList);

        this.subscriptions.push(
            this.actions$.pipe(
                filter(action => action.type === AuthorListActions.LOAD_AUTHOR_LIST_FAILURE)
            ).subscribe(
                action => console.log(action)
            )
        );

        getInvalidData ? this.store.dispatch(loadAuthorListInvalid()) : this.store.dispatch(loadAuthorList());
    }
}
