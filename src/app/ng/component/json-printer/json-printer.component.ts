import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthorItem } from '../../../store/model';
import { AuthorListService } from '../../../store/service';

@Component({
    selector: 'app-json-printer',
    templateUrl: './json-printer.component.html'
})
export class JsonPrinterComponent implements OnInit {
    @Input() case = 'default';
    public authorList$: Observable<AuthorItem[]>;

    constructor(private authorListService: AuthorListService) {}

    ngOnInit(): void {
        switch (this.case) {
            case 'invalid':
                this.authorList$ = this.authorListService.getAuthorListInvalid();
                break;
            case 'object_object':
                this.authorList$ = this.authorListService.getAuthorListObjectObject();
                break;
            default:
                this.authorList$ = this.authorListService.getAuthorListSimple();
        }
    }
}
