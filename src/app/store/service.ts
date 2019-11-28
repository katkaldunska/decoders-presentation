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
    constructor(private http: HttpClient) {}

    public getAuthorListSimple(): Observable<AuthorItem[]>  {
        return this.http.get<AuthorItem[]>('assets/mocks/list.json');
    }

    public getAuthorListInvalid(): Observable<AuthorItem[]>  {
        return this.http.get<AuthorItem[]>('assets/mocks/invalid-list.json');
    }

    public getAuthorListObjectObject(): Observable<AuthorItem[]> {
        return this.http.get<AuthorItem[]>('assets/mocks/invalid-object-list.json');
    }

    public getAuthorList(scenario: string = 'default'): Observable<AuthorItem[]> {
        const path: string = scenario === 'default' ? 'assets/mocks/list.json' : 'assets/mocks/invalid-list.json';

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
