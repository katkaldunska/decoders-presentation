import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authorListReducer } from './store/reducer';
import { AuthorListEffects } from './store/effects';
import { JsonPrinterComponent } from './component/json-printer/json-printer.component';
import { ExampleCodeComponent } from './component/example-code/example-code.component';
import { ExampleTemplateComponent } from './component/example-template/example-template.component';

@NgModule({
    declarations: [
        AppComponent,
        JsonPrinterComponent,
        ExampleCodeComponent,
        ExampleTemplateComponent,
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
        ])
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
