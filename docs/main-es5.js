(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n\r\n<app-ng-main\r\n    *ngIf=\"currentPresentation === 'ng'; else google\"\r\n    [currentSlide]=\"currentSlide\"\r\n></app-ng-main>\r\n\r\n<ng-template #google>\r\n    <app-google-main\r\n        [currentSlide]=\"currentSlide\"\r\n    ></app-google-main>\r\n</ng-template>\r\n\r\n<button\r\n    class=\"btn btn-secondary fixed-bottom m-1\"\r\n    (click)=\"changePresentation()\"\r\n>{{ currentPresentation === 'ng' ? 'G' : 'A' }}</button>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/google/component/google-main/google-main.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google/component/google-main/google-main.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div\r\n    [ngSwitch]=\"currentSlide\"\r\n    [ngClass]=\"currentSlide\"\r\n    class=\"slide\"\r\n>\r\n    <section *ngSwitchCase=\"'title'\" class=\"align-self-center\">\r\n        <h1 class=\"bg-primary text-white\">Kontenery w chmurze</h1>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'kubernetes'\">\r\n        <h1 class=\"bg-primary text-white\">Kubernetes</h1>\r\n        <div>\r\n            <img\r\n                class=\"embed-responsive\"\r\n                src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Kubernetes_%28container_engine%29.png/927px-Kubernetes_%28container_engine%29.png\"\r\n                alt=\"Kubernetes's logo\"\r\n            >\r\n        </div>\r\n        <div>\r\n            <q class=\"text-primary text-center display-4\">Run billions of containers a week, Kubernetes can scale without increasing your ops team</q>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'tools'\">\r\n        <h1 class=\"bg-primary text-white\">Narzędzia</h1>\r\n        <ul class=\"list-group list-group-flush m-4\">\r\n            <li class=\"list-group-item display-4\">Docker</li>\r\n            <li class=\"list-group-item display-4\">Google Cloud Build (Google Container Builder)</li>\r\n            <li class=\"list-group-item display-4\">Google Container Registry</li>\r\n        </ul>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'minikube'\">\r\n        <h1 class=\"bg-primary text-white\">Minikube</h1>\r\n        <div>\r\n            <ul>\r\n                <li class=\"display-4\">Hypervisor</li>\r\n                <li class=\"display-4\">Kubectl</li>\r\n                <li class=\"display-4\">Minikube</li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'iaas_paas'\">\r\n        <h1 class=\"bg-primary text-white\">Google Kubernetes Engine</h1>\r\n        <div>\r\n            <img src=\"../../../assets/images/IaaSvsPaaS.png\">\r\n        </div>\r\n        <div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\"><strong>IaaS</strong> - dostęp do serwerów, systemu plików i networkingu - płatność za to, co zaalokujemy.</li>\r\n                <li class=\"list-group-item\"><strong>PaaS</strong> - ustawione czasy pracy, zarządzane usługi - płatność za to, czego używamy.</li>\r\n                <li class=\"list-group-item\"><strong>Kubernetes Engine</strong> - hybryda pomiędzy IaaS a PaaS.</li>\r\n                <li class=\"list-group-item\">Kontenery oferują elastyczność IaaS i skalowalność PaaS</li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'containers'\">\r\n        <h1 class=\"bg-primary text-white\">Kontenery</h1>\r\n        <ul class=\"list-group list-group-flush m-4\">\r\n            <li class=\"list-group-item display-4\"><h2>Zapewniają abstrakcyjną warstwę hardware'u i OSu</h2></li>\r\n            <li class=\"list-group-item display-4\"><h2>Dostęp do konfiguracji izolowanych partycji systemu, pamięci RAM i networkingu</h2></li>\r\n            <li class=\"list-group-item display-4\"><h2>Szybki startup</h2></li>\r\n            <li class=\"list-group-item display-4\"><h2>Dzięki abstrakcji kod jest przenośny - można traktować OS i hardware jako czarną skrzynkę</h2></li>\r\n        </ul>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'cluster'\">\r\n        <h1 class=\"bg-primary text-white\">Klaster</h1>\r\n        <h2 class=\"m-4\">Wspólna konfiguracja hosta umożliwia wdrożenie grupy kontenerów na grupie serwerów - klastrze. Za pomocą klastra możemy:</h2>\r\n        <ul class=\"list-group list-group-flush m-4\">\r\n            <li class=\"list-group-item\"><h3>połączyć kontenery używając połączeń sieciowych</h3></li>\r\n            <li class=\"list-group-item\"><h3>mieć modułowy kod</h3></li>\r\n            <li class=\"list-group-item\"><h3>łatwe wdrożenia</h3></li>\r\n            <li class=\"list-group-item\"><h3>skalować kontenery i hosty niezależenie dla max wydajności i oszczędności</h3></li>\r\n        </ul>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'api'\">\r\n        <h1 class=\"bg-primary text-white\">Kubernetes API</h1>\r\n        <div>\r\n            <img src=\"../../../assets/images/api.png\">\r\n        </div>\r\n        <ul class=\"list-group list-group-flush m-4\">\r\n            <li class=\"list-group-item\"><h2>do wdrożenia kontenerów do klastru (klaster - zestaw węzłów)</h2></li>\r\n            <li class=\"list-group-item\"><h2>system jest podzielony na komponenty master (które działają jako płaszczyzna sterowania) oraz zestaw węzłów uruchamiających kontenery</h2></li>\r\n            <li class=\"list-group-item\"><h2>węzły są VM działającymi na Compute Engine</h2></li>\r\n        </ul>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'ke_bootstrap'\">\r\n        <h1 class=\"bg-primary text-white\">Tworzenie klastra</h1>\r\n        <pre><code\r\n                [innerText]=\"createCluster\"\r\n                [highlight]=\"createCluster\"\r\n                class=\"m-4\"\r\n        ></code></pre>\r\n        <ul class=\"list-group list-group-flush m-4\">\r\n            <li class=\"list-group-item\"><h2>wdrażając kontener/y na klaster tworzy się <strong>pod</strong> - najmniejsza jednostka Kubernetesa</h2></li>\r\n            <li class=\"list-group-item\"><h2>zazwyczaj 1 kontener - 1 pod</h2></li>\r\n            <li class=\"list-group-item\"><h2>pod zapewnia unikalny adres IP sieci, zestaw portów dla kontenerów i opcje które, określają sposób działania kontenerów</h2></li>\r\n            <li class=\"list-group-item\"><h2>kontenery w pod'zie mogą komunikować się ze sobą za pomocą localhosta i portów, które pozostają stałe gdy są uruchamiane i zatrzymywane na różnych węzłach</h2></li>\r\n        </ul>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'kubectl'\">\r\n        <h1 class=\"bg-primary text-white\">kubectl</h1>\r\n        <pre><code\r\n            [innerText]=\"runCluster\"\r\n            [highlight]=\"runCluster\"\r\n            class=\"m-4\"\r\n        ></code></pre>\r\n        <ul class=\"list-group list-group-flush m-4\">\r\n            <li class=\"list-group-item\"><h2><strong>kubectl</strong> - zestaw instrukcji dla Kubernetes API</h2></li>\r\n            <li class=\"list-group-item\"><h2>start deploymentu kontenera uruchomionego w pod'zie</h2></li>\r\n        </ul>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'kubectl_get'\">\r\n        <h1 class=\"bg-primary text-white\">kubectl get pods</h1>\r\n        <pre><code\r\n            [innerText]=\"getPods\"\r\n            [highlight]=\"getPods\"\r\n            class=\"m-4\"\r\n        ></code></pre>\r\n        <h2 class=\"m-4\">Komenda zezwala zobaczyć działające pod'y.</h2>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'kubectl_expose'\">\r\n        <h1 class=\"bg-primary text-white\">kubectl expose</h1>\r\n        <h2 class=\"m-4\">Domyślnie pod'y są dostępne tylko w klastrze i dostają efemeryczne adresy IP</h2>\r\n        <pre><code\r\n            [innerText]=\"connectLoadBalancer\"\r\n            [highlight]=\"connectLoadBalancer\"\r\n            class=\"m-4\"\r\n        ></code></pre>\r\n        <h2 class=\"m-4\">Aby udostępnić je publicznie ze stałym IP, można podłączyć load balancera do Deploymentu</h2>\r\n        <pre><code\r\n            [innerText]=\"getServices\"\r\n            [highlight]=\"getServices\"\r\n            class=\"m-4\"\r\n        ></code></pre>\r\n        <h2 class=\"m-4\">Pobranie publicznych adresów IP serwisów</h2>\r\n    </section>\r\n\r\n    <section *ngSwitchDefault>\r\n        <h1>KONIEC</h1>\r\n    </section>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/decoder-example/decoder-example.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/decoder-example/decoder-example.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<pre><code [innerText]=\"code\" [highlight]=\"code\"></code></pre>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/elm-example/elm-example.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/elm-example/elm-example.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<pre><code [highlight]=\"code\" [innerText]=\"code\"></code></pre>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/example-code/example-code.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/example-code/example-code.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<code>\r\n    <pre\r\n        [innerText]=\"htmlCode\"\r\n        [highlight]=\"htmlCode\"\r\n        class=\"m-5\"\r\n    ></pre>\r\n</code>\r\n\r\n<code>\r\n    <pre\r\n        [innerText]=\"tsCode\"\r\n        [highlight]=\"tsCode\"\r\n        class=\"m-5\"\r\n    ></pre>\r\n</code>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/example-template/example-template.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/example-template/example-template.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"(authorList$ | async)?.isLoading\">loading...</span>\r\n\r\n<ul>\r\n    <li *ngFor=\"let item of (authorList$ | async)?.items\">\r\n        <h3>{{ item.author }}</h3>\r\n        <p *ngIf=\"item.books.length\">\r\n            <span *ngFor=\"let tag of sortedBooks(item)\">{{ tag }}, </span>\r\n        </p>\r\n    </li>\r\n</ul>\r\n\r\n<div *ngIf=\"(authorList$ | async)?.error\">\r\n    {{ (authorList$ | async).error }}\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/json-printer/json-printer.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/json-printer/json-printer.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"bg-dark text-white m-5\" [highlight]=\"(authorList$ | async) | json\">\r\n    {{ (authorList$ | async) | json }}\r\n</pre>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/ng-main/ng-main.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/ng-main/ng-main.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div\r\n    [ngSwitch]=\"currentSlide\"\r\n    class=\"slide\"\r\n>\r\n    <h1 *ngSwitchCase=\"'title'\" class=\"align-self-center\">Dekodery JSON w Elm'ie</h1>\r\n    <section *ngSwitchCase=\"'problem'\">\r\n        <h1 class=\"bg-danger text-white\">Problem</h1>\r\n        <div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item display-4\">używamy wiele endpointów</li>\r\n                <li class=\"list-group-item display-4\">third party API</li>\r\n                <li class=\"list-group-item display-4\">nie wiemy kiedy coś się zmieni</li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'case'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">JSON</h1>\r\n        <app-json-printer></app-json-printer>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'code'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">Komponent</h1>\r\n        <app-example-code></app-example-code>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'template-default'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">Rezultat</h1>\r\n        <app-example-template></app-example-template>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'case_change'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">JSON v2</h1>\r\n        <app-json-printer case=\"invalid\"></app-json-printer>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'template-change'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">Rezultat v2</h1>\r\n        <app-example-template case=\"invalid\"></app-example-template>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'case_object_object'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">JSON v3</h1>\r\n        <app-json-printer case=\"object_object\"></app-json-printer>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'template-object_object'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">Rezultat v3</h1>\r\n        <app-example-template case=\"object_object\"></app-example-template>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'elm'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">Elm</h1>\r\n        <div>\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item display-4\">funkcyjny język programowania</li>\r\n                <li class=\"list-group-item display-4\">kompilowany do JS</li>\r\n                <li class=\"list-group-item display-4\">statyczny system typów</li>\r\n                <li class=\"list-group-item display-4\">niemutowalne struktury danych</li>\r\n            </ul>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'runtime_exceptions'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">Brak runtime exceptions</h1>\r\n        <div>\r\n            <img src=\"https://miro.medium.com/max/1296/0*xAkAyZF4yy-k8kbz.png\">\r\n            <small>https://codeburst.io/top-10-javascript-errors-from-1000-projects-and-how-to-avoid-them-2956ce008437</small>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'decoders'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">Dekodery</h1>\r\n        <div>\r\n            <h1 class=\"m-5\">Dekoder jest funkcją, która może pobrać kawałek JSONa i zdekodować go do wartości Elma, z typem pasującym do typu, o którym wie Elm.</h1>\r\n            <small>https://javascriptplayground.com/json-decoding-in-elm/</small>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'elm_example'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">Elm - dekoder</h1>\r\n        <app-elm-example></app-elm-example>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'ts_data_json'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">ts.data.json</h1>\r\n        <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item display-4\">biblioteka TS</li>\r\n            <li class=\"list-group-item display-4\">kompatybilna z NgRx</li>\r\n            <li class=\"list-group-item display-4\">framework agnostic</li>\r\n        </ul>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'decoder_example'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">decoder.ts</h1>\r\n        <app-decoder-example></app-decoder-example>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'decode'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">service.ts</h1>\r\n        <pre><code [innerText]=\"serviceCode\" [highlight]=\"serviceCode\"></code></pre>\r\n    </section>\r\n\r\n    <section *ngSwitchCase=\"'result'\" class=\"flex-direction-row\">\r\n        <h1 class=\"bg-danger text-white\">Rezultat</h1>\r\n        <app-example-template case=\"invalid_with_decoder\"></app-example-template>\r\n    </section>\r\n\r\n    <section *ngSwitchDefault>\r\n        <h1>KONIEC</h1>\r\n    </section>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_slides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng/slides */ "./src/app/ng/slides.ts");
            /* harmony import */ var _google_slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google/slides */ "./src/app/google/slides.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.slides = _google_slides__WEBPACK_IMPORTED_MODULE_3__["googleSlides"];
                    this.currentPresentation = 'google';
                    this.currentSlide = 'title';
                }
                AppComponent.prototype.onKeydown = function (event) {
                    if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(event.code)) {
                        this.setCurrentSlide(1);
                    }
                    else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.code)) {
                        this.setCurrentSlide(-1);
                    }
                };
                AppComponent.prototype.changePresentation = function () {
                    if (this.currentPresentation === 'ng') {
                        this.currentPresentation = 'google';
                        this.slides = _google_slides__WEBPACK_IMPORTED_MODULE_3__["googleSlides"];
                    }
                    else {
                        this.currentPresentation = 'ng';
                        this.slides = _ng_slides__WEBPACK_IMPORTED_MODULE_2__["ngSlides"];
                    }
                    this.currentSlide = this.slides[0];
                };
                AppComponent.prototype.setCurrentSlide = function (increment) {
                    var _this = this;
                    var previousIndex = this.slides.findIndex(function (s) { return s === _this.currentSlide; });
                    if (previousIndex === -1 && increment === -1) {
                        this.currentSlide = this.slides[this.slides.length - 1];
                    }
                    else {
                        this.currentSlide = this.slides[previousIndex + increment];
                    }
                };
                return AppComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], AppComponent.prototype, "onKeydown", null);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: getHighlightLanguages, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighlightLanguages", function () { return getHighlightLanguages; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/reducer */ "./src/app/store/reducer.ts");
            /* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/effects */ "./src/app/store/effects.ts");
            /* harmony import */ var _ng_component_json_printer_json_printer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ng/component/json-printer/json-printer.component */ "./src/app/ng/component/json-printer/json-printer.component.ts");
            /* harmony import */ var _ng_component_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ng/component/example-code/example-code.component */ "./src/app/ng/component/example-code/example-code.component.ts");
            /* harmony import */ var _ng_component_example_template_example_template_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ng/component/example-template/example-template.component */ "./src/app/ng/component/example-template/example-template.component.ts");
            /* harmony import */ var _ng_component_elm_example_elm_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ng/component/elm-example/elm-example.component */ "./src/app/ng/component/elm-example/elm-example.component.ts");
            /* harmony import */ var _ng_component_decoder_example_decoder_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ng/component/decoder-example/decoder-example.component */ "./src/app/ng/component/decoder-example/decoder-example.component.ts");
            /* harmony import */ var _ng_component_ng_main_ng_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ng/component/ng-main/ng-main.component */ "./src/app/ng/component/ng-main/ng-main.component.ts");
            /* harmony import */ var _google_component_google_main_google_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./google/component/google-main/google-main.component */ "./src/app/google/component/google-main/google-main.component.ts");
            /**
             * Import specific languages to avoid importing everything
             * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
             */
            function getHighlightLanguages() {
                return {
                    typescript: function () { return __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js", 7)); },
                    elm: function () { return __webpack_require__.e(/*! import() | highlight-js-lib-languages-elm */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/elm */ "./node_modules/highlight.js/lib/languages/elm.js", 7)); },
                    bash: function () { return __webpack_require__.e(/*! import() | highlight-js-lib-languages-bash */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/bash */ "./node_modules/highlight.js/lib/languages/bash.js", 7)); },
                    shell: function () { return __webpack_require__.e(/*! import() | highlight-js-lib-languages-shell */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/shell */ "./node_modules/highlight.js/lib/languages/shell.js", 7)); },
                };
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                        _ng_component_json_printer_json_printer_component__WEBPACK_IMPORTED_MODULE_12__["JsonPrinterComponent"],
                        _ng_component_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_13__["ExampleCodeComponent"],
                        _ng_component_example_template_example_template_component__WEBPACK_IMPORTED_MODULE_14__["ExampleTemplateComponent"],
                        _ng_component_elm_example_elm_example_component__WEBPACK_IMPORTED_MODULE_15__["ElmExampleComponent"],
                        _ng_component_decoder_example_decoder_example_component__WEBPACK_IMPORTED_MODULE_16__["DecoderExampleComponent"],
                        _ng_component_ng_main_ng_main_component__WEBPACK_IMPORTED_MODULE_17__["NgMainComponent"],
                        _google_component_google_main_google_main_component__WEBPACK_IMPORTED_MODULE_18__["GoogleMainComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
                            authorList: _store_reducer__WEBPACK_IMPORTED_MODULE_10__["authorListReducer"]
                        }),
                        _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([
                            _store_effects__WEBPACK_IMPORTED_MODULE_11__["AuthorListEffects"]
                        ]),
                        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"]
                    ],
                    providers: [{
                            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_OPTIONS"],
                            useValue: {
                                languages: getHighlightLanguages()
                            }
                        }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/google/component/google-main/google-main.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/google/component/google-main/google-main.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div {\n  max-height: 100vh;\n}\ndiv.title {\n  background: url(\"https://cdn.pixabay.com/photo/2017/05/07/20/13/site-2293451_1280.jpg\") no-repeat;\n  background-size: cover;\n}\ndiv.title section {\n  align-self: end !important;\n}\ndiv.title section h1 {\n  margin-bottom: 4%;\n  padding: 2%;\n}\ndiv.kubernetes img {\n  max-height: 25vh;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlL2NvbXBvbmVudC9nb29nbGUtbWFpbi9DOlxcRGV2XFxkZWNvZGVycy1wcmVzZW50YXRpb24vc3JjXFxhcHBcXGdvb2dsZVxcY29tcG9uZW50XFxnb29nbGUtbWFpblxcZ29vZ2xlLW1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dvb2dsZS9jb21wb25lbnQvZ29vZ2xlLW1haW4vZ29vZ2xlLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQ0k7RUFDSSxpR0FBQTtFQUNBLHNCQUFBO0FDQ1I7QURDUTtFQUNJLDBCQUFBO0FDQ1o7QURDWTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NoQjtBREtRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC9nb29nbGUvY29tcG9uZW50L2dvb2dsZS1tYWluL2dvb2dsZS1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgICYudGl0bGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNy8wNS8wNy8yMC8xMy9zaXRlLTIyOTM0NTFfMTI4MC5qcGcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmt1YmVybmV0ZXMge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI1dmg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJkaXYge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbn1cbmRpdi50aXRsZSB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTcvMDUvMDcvMjAvMTMvc2l0ZS0yMjkzNDUxXzEyODAuanBnXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbmRpdi50aXRsZSBzZWN0aW9uIHtcbiAgYWxpZ24tc2VsZjogZW5kICFpbXBvcnRhbnQ7XG59XG5kaXYudGl0bGUgc2VjdGlvbiBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBwYWRkaW5nOiAyJTtcbn1cbmRpdi5rdWJlcm5ldGVzIGltZyB7XG4gIG1heC1oZWlnaHQ6IDI1dmg7XG4gIHdpZHRoOiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/google/component/google-main/google-main.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/google/component/google-main/google-main.component.ts ***!
          \***********************************************************************/
        /*! exports provided: GoogleMainComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMainComponent", function () { return GoogleMainComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GoogleMainComponent = /** @class */ (function () {
                function GoogleMainComponent() {
                    this.createCluster = "gcloud container cluster create k1";
                    this.runCluster = "kubectl run nginx --image=nginx:1.15.7";
                    this.getPods = "kubectl get pods";
                    this.connectLoadBalancer = "kubectl expose deployments nginx --port=80 --type=LoadBalancer";
                    this.getServices = "kubectl get services";
                }
                return GoogleMainComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GoogleMainComponent.prototype, "currentSlide", void 0);
            GoogleMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-google-main',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/google/component/google-main/google-main.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-main.component.scss */ "./src/app/google/component/google-main/google-main.component.scss")).default]
                })
            ], GoogleMainComponent);
            /***/ 
        }),
        /***/ "./src/app/google/slides.ts": 
        /*!**********************************!*\
          !*** ./src/app/google/slides.ts ***!
          \**********************************/
        /*! exports provided: googleSlides */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleSlides", function () { return googleSlides; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var googleSlides = [
                'title',
                'kubernetes',
                'tools',
                'minikube',
                'iaas_paas',
                'containers',
                'cluster',
                'api',
                'ke_bootstrap',
                'kubectl',
                'kubectl_get',
                'kubectl_expose'
            ];
            /***/ 
        }),
        /***/ "./src/app/ng/component/decoder-example/decoder-example.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/ng/component/decoder-example/decoder-example.component.ts ***!
          \***************************************************************************/
        /*! exports provided: DecoderExampleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoderExampleComponent", function () { return DecoderExampleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DecoderExampleComponent = /** @class */ (function () {
                function DecoderExampleComponent() {
                    this.code = "\n        import { JsonDecoder } from 'ts.data.json';\n        import { AuthorItem } from './model';\n        \n        export const AuthorItemDecoder = JsonDecoder.object<AuthorItem>({\n            author: JsonDecoder.string,\n            age: JsonDecoder.number,\n            books: JsonDecoder.array<string>(JsonDecoder.string, 'AuthorItemBooks[]'),\n            alive: JsonDecoder.boolean\n        }, 'AuthorItemDecoder');\n        \n        export const AuthorListDecoder = JsonDecoder.array<AuthorItem>(\n            AuthorItemDecoder, 'AuthorItemDecoder[]'\n        );\n    ";
                }
                return DecoderExampleComponent;
            }());
            DecoderExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-decoder-example',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./decoder-example.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/decoder-example/decoder-example.component.html")).default
                })
            ], DecoderExampleComponent);
            /***/ 
        }),
        /***/ "./src/app/ng/component/elm-example/elm-example.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/ng/component/elm-example/elm-example.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ElmExampleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElmExampleComponent", function () { return ElmExampleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ElmExampleComponent = /** @class */ (function () {
                function ElmExampleComponent() {
                    this.code = "\n        import Json.Decode as Decoder\n    \n        authorItemDecoder : Decoder.Decoder AuthorItem\n        authorItemDecoder =\n            Decoder.map4\n            (\title count tags available -> AuthorItem title count tags available)\n                (Decoder.field \"author\" Decoder.string)\n                (Decoder.field \"age\" Decoder.int)\n                (Decoder.field \"books\" (Decoder.list Decoder.string))\n                (Decoder.field \"alive\" Decoder.bool)\n    \n        authorListDecoder : Decoder.Decoder AuthorList\n        authorListDecoder =\n            Decoder.list authorItemDecoder\n     ";
                }
                return ElmExampleComponent;
            }());
            ElmExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-elm-example',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./elm-example.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/elm-example/elm-example.component.html")).default
                })
            ], ElmExampleComponent);
            /***/ 
        }),
        /***/ "./src/app/ng/component/example-code/example-code.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/ng/component/example-code/example-code.component.ts ***!
          \*********************************************************************/
        /*! exports provided: ExampleCodeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleCodeComponent", function () { return ExampleCodeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ExampleCodeComponent = /** @class */ (function () {
                function ExampleCodeComponent() {
                    this.htmlCode = "\n        <ul>\n            <li *ngFor=\"let item of (authorList$ | async).items\">\n                <h3>{{ item.author }}</h3>\n                <p *ngIf=\"item.books.length\">\n                    <span *ngFor=\"let tag of sortedBooks(item)\">{{ tag }}, </span>\n                </p>\n            </li>\n        </ul>\n    ";
                    this.tsCode = "\n        public sortedBooks(item: AuthorItem): string[] {\n            return item.books.sort();\n        }\n    ";
                }
                return ExampleCodeComponent;
            }());
            ExampleCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-example-code',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example-code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/example-code/example-code.component.html")).default
                })
            ], ExampleCodeComponent);
            /***/ 
        }),
        /***/ "./src/app/ng/component/example-template/example-template.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/ng/component/example-template/example-template.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: ExampleTemplateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTemplateComponent", function () { return ExampleTemplateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions */ "./src/app/store/actions.ts");
            /* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/service */ "./src/app/store/service.ts");
            var ExampleTemplateComponent = /** @class */ (function () {
                function ExampleTemplateComponent(store, actions$, authorListService) {
                    this.store = store;
                    this.actions$ = actions$;
                    this.authorListService = authorListService;
                    this.case = 'default';
                    this.subscriptions = [];
                }
                ExampleTemplateComponent.prototype.ngOnInit = function () {
                    if (this.case === 'default') {
                        this.loadWithDecoder();
                    }
                    else if (this.case === 'invalid_with_decoder') {
                        this.loadWithDecoder(true);
                    }
                    else if (this.case === 'invalid') {
                        this.authorList$ = this.authorListService.getAuthorListInvalid().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) { return ({
                            items: items,
                            isLoading: false,
                            error: ''
                        }); }));
                    }
                    else if (this.case === 'object_object') {
                        this.authorList$ = this.authorListService.getAuthorListObjectObject().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) { return ({
                            items: items,
                            isLoading: false,
                            error: ''
                        }); }));
                    }
                };
                ExampleTemplateComponent.prototype.ngOnDestroy = function () {
                    this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
                };
                ExampleTemplateComponent.prototype.sortedBooks = function (item) {
                    return item.books.sort();
                };
                ExampleTemplateComponent.prototype.loadWithDecoder = function (getInvalidData) {
                    if (getInvalidData === void 0) { getInvalidData = false; }
                    this.authorList$ = this.store.select(function (state) { return state.authorList; });
                    this.subscriptions.push(this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (action) { return action.type === _store_actions__WEBPACK_IMPORTED_MODULE_4__["AuthorListActions"].LOAD_AUTHOR_LIST_FAILURE; })).subscribe(function (action) { return console.log(action); }));
                    getInvalidData ? this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__["loadAuthorListInvalid"])()) : this.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__["loadAuthorList"])());
                };
                return ExampleTemplateComponent;
            }());
            ExampleTemplateComponent.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["ScannedActionsSubject"] },
                { type: _store_service__WEBPACK_IMPORTED_MODULE_5__["AuthorListService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ExampleTemplateComponent.prototype, "case", void 0);
            ExampleTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-example-template',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/example-template/example-template.component.html")).default
                })
            ], ExampleTemplateComponent);
            /***/ 
        }),
        /***/ "./src/app/ng/component/json-printer/json-printer.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/ng/component/json-printer/json-printer.component.ts ***!
          \*********************************************************************/
        /*! exports provided: JsonPrinterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonPrinterComponent", function () { return JsonPrinterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/service */ "./src/app/store/service.ts");
            var JsonPrinterComponent = /** @class */ (function () {
                function JsonPrinterComponent(authorListService) {
                    this.authorListService = authorListService;
                    this.case = 'default';
                }
                JsonPrinterComponent.prototype.ngOnInit = function () {
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
                };
                return JsonPrinterComponent;
            }());
            JsonPrinterComponent.ctorParameters = function () { return [
                { type: _store_service__WEBPACK_IMPORTED_MODULE_2__["AuthorListService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], JsonPrinterComponent.prototype, "case", void 0);
            JsonPrinterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-json-printer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./json-printer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/json-printer/json-printer.component.html")).default
                })
            ], JsonPrinterComponent);
            /***/ 
        }),
        /***/ "./src/app/ng/component/ng-main/ng-main.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/ng/component/ng-main/ng-main.component.ts ***!
          \***********************************************************/
        /*! exports provided: NgMainComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMainComponent", function () { return NgMainComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NgMainComponent = /** @class */ (function () {
                function NgMainComponent() {
                    this.serviceCode = "\n        return this.http.get<AuthorItem[]>(path).pipe(\n                concatMap(p => fromPromise(AuthorListDecoder\n                    .decodePromise(p)\n                    .catch(e => {\n                        throw new Error(e);\n                    })\n                ))\n            );\n    ";
                }
                return NgMainComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], NgMainComponent.prototype, "currentSlide", void 0);
            NgMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ng-main',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ng-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ng/component/ng-main/ng-main.component.html")).default
                })
            ], NgMainComponent);
            /***/ 
        }),
        /***/ "./src/app/ng/slides.ts": 
        /*!******************************!*\
          !*** ./src/app/ng/slides.ts ***!
          \******************************/
        /*! exports provided: ngSlides */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngSlides", function () { return ngSlides; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ngSlides = [
                'title',
                'problem',
                'case',
                'code',
                'template-default',
                'case_change',
                'template-change',
                'case_object_object',
                'template-object_object',
                'elm',
                'runtime_exceptions',
                'decoders',
                'elm_example',
                'ts_data_json',
                'decoder_example',
                'decode',
                'result'
            ];
            /***/ 
        }),
        /***/ "./src/app/store/actions.ts": 
        /*!**********************************!*\
          !*** ./src/app/store/actions.ts ***!
          \**********************************/
        /*! exports provided: AuthorListActions, loadAuthorList, loadAuthorListInvalid, loadAuthorListSuccess, loadAuthorListFailure */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListActions", function () { return AuthorListActions; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthorList", function () { return loadAuthorList; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthorListInvalid", function () { return loadAuthorListInvalid; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthorListSuccess", function () { return loadAuthorListSuccess; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthorListFailure", function () { return loadAuthorListFailure; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            var AuthorListActions = {
                LOAD_AUTHOR_LIST: '[Author List] Load Items',
                LOAD_AUTHOR_LIST_INVALID: '[Author List] Load Invalid Items',
                LOAD_AUTHOR_LIST_SUCCESS: '[Author List] Load Items Success',
                LOAD_AUTHOR_LIST_FAILURE: '[Author List] Load Items Failure'
            };
            var loadAuthorList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(AuthorListActions.LOAD_AUTHOR_LIST);
            var loadAuthorListInvalid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(AuthorListActions.LOAD_AUTHOR_LIST_INVALID);
            var loadAuthorListSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(AuthorListActions.LOAD_AUTHOR_LIST_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
            var loadAuthorListFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(AuthorListActions.LOAD_AUTHOR_LIST_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
            /***/ 
        }),
        /***/ "./src/app/store/decoder.ts": 
        /*!**********************************!*\
          !*** ./src/app/store/decoder.ts ***!
          \**********************************/
        /*! exports provided: AuthorItemDecoder, AuthorListDecoder */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorItemDecoder", function () { return AuthorItemDecoder; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListDecoder", function () { return AuthorListDecoder; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var ts_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts.data.json */ "./node_modules/ts.data.json/dist/index.js");
            /* harmony import */ var ts_data_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(ts_data_json__WEBPACK_IMPORTED_MODULE_1__);
            var AuthorItemDecoder = ts_data_json__WEBPACK_IMPORTED_MODULE_1__["JsonDecoder"].object({
                author: ts_data_json__WEBPACK_IMPORTED_MODULE_1__["JsonDecoder"].string,
                age: ts_data_json__WEBPACK_IMPORTED_MODULE_1__["JsonDecoder"].number,
                books: ts_data_json__WEBPACK_IMPORTED_MODULE_1__["JsonDecoder"].array(ts_data_json__WEBPACK_IMPORTED_MODULE_1__["JsonDecoder"].string, 'AuthorItemBooks[]'),
                alive: ts_data_json__WEBPACK_IMPORTED_MODULE_1__["JsonDecoder"].boolean
            }, 'AuthorItemDecoder');
            var AuthorListDecoder = ts_data_json__WEBPACK_IMPORTED_MODULE_1__["JsonDecoder"].array(AuthorItemDecoder, 'AuthorItemDecoder[]');
            /***/ 
        }),
        /***/ "./src/app/store/effects.ts": 
        /*!**********************************!*\
          !*** ./src/app/store/effects.ts ***!
          \**********************************/
        /*! exports provided: AuthorListEffects */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListEffects", function () { return AuthorListEffects; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
            /* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ "./src/app/store/service.ts");
            var AuthorListEffects = /** @class */ (function () {
                function AuthorListEffects(actions$, authorListService) {
                    var _this = this;
                    this.actions$ = actions$;
                    this.authorListService = authorListService;
                    this.loadAuthorList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (action) { return [_actions__WEBPACK_IMPORTED_MODULE_5__["AuthorListActions"].LOAD_AUTHOR_LIST, _actions__WEBPACK_IMPORTED_MODULE_5__["AuthorListActions"].LOAD_AUTHOR_LIST_INVALID].includes(action.type); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) { return _this.authorListService.getAuthorList(action.type === _actions__WEBPACK_IMPORTED_MODULE_5__["AuthorListActions"].LOAD_AUTHOR_LIST ? 'default' : 'invalid')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (items) { return ({ type: _actions__WEBPACK_IMPORTED_MODULE_5__["AuthorListActions"].LOAD_AUTHOR_LIST_SUCCESS, payload: items }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _actions__WEBPACK_IMPORTED_MODULE_5__["AuthorListActions"].LOAD_AUTHOR_LIST_FAILURE, payload: error.message }); })); })); });
                }
                return AuthorListEffects;
            }());
            AuthorListEffects.ctorParameters = function () { return [
                { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
                { type: _service__WEBPACK_IMPORTED_MODULE_6__["AuthorListService"] }
            ]; };
            AuthorListEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthorListEffects);
            /***/ 
        }),
        /***/ "./src/app/store/reducer.ts": 
        /*!**********************************!*\
          !*** ./src/app/store/reducer.ts ***!
          \**********************************/
        /*! exports provided: initialState, authorListReducer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function () { return initialState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorListReducer", function () { return authorListReducer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
            var initialState = {
                items: [],
                error: null,
                isLoading: false
            };
            var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthorList"], function () {
                return Object.assign({}, initialState, { isLoading: true });
            }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthorListInvalid"], function () {
                return Object.assign({}, initialState, { isLoading: true });
            }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthorListSuccess"], function (state, action) {
                return { items: action.payload, error: null, isLoading: false };
            }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthorListFailure"], function (state, action) {
                return { items: null, error: action.payload, isLoading: false };
            }));
            var authorListReducer = function (state, action) {
                return reducer(state, action);
            };
            /***/ 
        }),
        /***/ "./src/app/store/service.ts": 
        /*!**********************************!*\
          !*** ./src/app/store/service.ts ***!
          \**********************************/
        /*! exports provided: AuthorListService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListService", function () { return AuthorListService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm2015/internal-compatibility/index.js");
            /* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decoder */ "./src/app/store/decoder.ts");
            var AuthorListService = /** @class */ (function () {
                function AuthorListService(http) {
                    this.http = http;
                }
                AuthorListService.prototype.getAuthorListSimple = function () {
                    return this.http.get('assets/mocks/list.json');
                };
                AuthorListService.prototype.getAuthorListInvalid = function () {
                    return this.http.get('assets/mocks/invalid-list.json');
                };
                AuthorListService.prototype.getAuthorListObjectObject = function () {
                    return this.http.get('assets/mocks/invalid-object-list.json');
                };
                AuthorListService.prototype.getAuthorList = function (scenario) {
                    if (scenario === void 0) { scenario = 'default'; }
                    var path = scenario === 'default' ? 'assets/mocks/list.json' : 'assets/mocks/invalid-list.json';
                    return this.http.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (p) { return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_4__["fromPromise"])(_decoder__WEBPACK_IMPORTED_MODULE_5__["AuthorListDecoder"]
                        .decodePromise(p)
                        .catch(function (e) {
                        throw new Error(e);
                    })); }));
                };
                return AuthorListService;
            }());
            AuthorListService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthorListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthorListService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Dev\decoders-presentation\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map