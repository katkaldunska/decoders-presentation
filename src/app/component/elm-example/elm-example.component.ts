import { Component } from '@angular/core';

@Component({
    selector: 'app-elm-example',
    templateUrl: './elm-example.component.html'
})
export class ElmExampleComponent {
    public code = `
        import Json.Decode as Decoder
    
        authorItemDecoder : Decoder.Decoder AuthorItem
        authorItemDecoder =
            Decoder.map4
            (\title count tags available -> AuthorItem title count tags available)
                (Decoder.field "author" Decoder.string)
                (Decoder.field "age" Decoder.int)
                (Decoder.field "books" (Decoder.list Decoder.string))
                (Decoder.field "alive" Decoder.bool)
    
        authorListDecoder : Decoder.Decoder AuthorList
        authorListDecoder =
            Decoder.list authorItemDecoder
     `;
}
