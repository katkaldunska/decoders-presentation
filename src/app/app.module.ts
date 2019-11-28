import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authorListReducer } from './store/reducer';
import { AuthorListEffects } from './store/effects';
import { JsonPrinterComponent } from './component/json-printer/json-printer.component';
import { ExampleCodeComponent } from './component/example-code/example-code.component';
import { ExampleTemplateComponent } from './component/example-template/example-template.component';
import { ElmExampleComponent } from './component/elm-example/elm-example.component';
import { DecoderExampleComponent } from './component/decoder-example/decoder-example.component';

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
    return {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        elm: () => import('highlight.js/lib/languages/elm')
    };
}

@NgModule({
    declarations: [
        AppComponent,
        JsonPrinterComponent,
        ExampleCodeComponent,
        ExampleTemplateComponent,
        ElmExampleComponent,
        DecoderExampleComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        StoreModule.forRoot({
            authorList: authorListReducer
        }),
        EffectsModule.forRoot([
            AuthorListEffects
        ]),
        HighlightModule
    ],
    providers: [{
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
            languages: getHighlightLanguages()
        }
    }],
    bootstrap: [AppComponent]
})

export class AppModule {
}
