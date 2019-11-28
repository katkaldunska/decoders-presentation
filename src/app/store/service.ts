import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';

import { AuthorListDecoder } from './decoder';
import { AuthorItem } from './model';

@Injectable({
    providedIn: 'root'
})
export class AuthorListService {
    constructor(public http: HttpClient) {}

    getAuthorListSimple() {
        return this.http.get<AuthorItem[]>('assets/mocks/list.json');
    }

    getAuthorListInvalid() {
        return this.http.get<AuthorItem[]>('assets/mocks/invalid-list.json');
    }

    getAuthorListObjectObject() {
        return this.http.get<AuthorItem[]>('assets/mocks/invalid-object-list.json');
    }

    public getAuthorList(scenario: string = 'default'): Observable<AuthorItem[]> {
        let path;

        if (scenario === 'default') {
            path = 'assets/mocks/list.json';
        } else if (scenario === 'invalid') {
            path = 'assets/mocks/invalid-list.json';
        }

        return this.http.get<AuthorItem[]>(path).pipe(
            concatMap(p => fromPromise(AuthorListDecoder
                .decodePromise(p)
                .catch(e => {
                    throw new Error(e);
                })
            ))
        );
    }
}
