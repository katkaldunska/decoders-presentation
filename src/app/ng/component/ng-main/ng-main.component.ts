import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ng-main',
    templateUrl: './ng-main.component.html'
})
export class NgMainComponent {
    @Input() currentSlide: string;
    public serviceCode = `
        return this.http.get<AuthorItem[]>(path).pipe(
                concatMap(p => fromPromise(AuthorListDecoder
                    .decodePromise(p)
                    .catch(e => {
                        throw new Error(e);
                    })
                ))
            );
    `;
}
