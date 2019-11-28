import { Component } from '@angular/core';

@Component({
    selector: 'app-example-code',
    templateUrl: './example-code.component.html'
})
export class ExampleCodeComponent {

    public htmlCode = `
        <ul>
            <li *ngFor="let item of (authorList$ | async).items">
                <h3>{{ item.author }}</h3>
                <p *ngIf="item.books.length">
                    <span *ngFor="let tag of sortedBooks(item)">{{ tag }}, </span>
                </p>
            </li>
        </ul>
    `;

    public tsCode = `
        public sortedBooks(item: AuthorItem): string[] {
            return item.books.sort();
        }
    `;
}
