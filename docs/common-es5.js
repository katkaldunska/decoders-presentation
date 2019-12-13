(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./node_modules/highlight.js/lib/languages/bash.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/highlight.js/lib/languages/bash.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = function (hljs) {
                var VAR = {
                    className: 'variable',
                    variants: [
                        { begin: /\$[\w\d#@][\w\d_]*/ },
                        { begin: /\$\{(.*?)}/ }
                    ]
                };
                var QUOTE_STRING = {
                    className: 'string',
                    begin: /"/, end: /"/,
                    contains: [
                        hljs.BACKSLASH_ESCAPE,
                        VAR,
                        {
                            className: 'variable',
                            begin: /\$\(/, end: /\)/,
                            contains: [hljs.BACKSLASH_ESCAPE]
                        }
                    ]
                };
                var ESCAPED_QUOTE = {
                    className: '',
                    begin: /\\"/
                };
                var APOS_STRING = {
                    className: 'string',
                    begin: /'/, end: /'/
                };
                return {
                    aliases: ['sh', 'zsh'],
                    lexemes: /\b-?[a-z\._]+\b/,
                    keywords: {
                        keyword: 'if then else elif fi for while in do done case esac function',
                        literal: 'true false',
                        built_in: 
                        // Shell built-ins
                        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
                        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
                            'trap umask unset ' +
                            // Bash built-ins
                            'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
                            'read readarray source type typeset ulimit unalias ' +
                            // Shell modifiers
                            'set shopt ' +
                            // Zsh built-ins
                            'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
                            'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
                            'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
                            'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
                            'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
                            'zpty zregexparse zsocket zstyle ztcp',
                        _: '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
                    },
                    contains: [
                        {
                            className: 'meta',
                            begin: /^#![^\n]+sh\s*$/,
                            relevance: 10
                        },
                        {
                            className: 'function',
                            begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                            returnBegin: true,
                            contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
                            relevance: 0
                        },
                        hljs.HASH_COMMENT_MODE,
                        QUOTE_STRING,
                        ESCAPED_QUOTE,
                        APOS_STRING,
                        VAR
                    ]
                };
            };
            /***/ 
        }),
        /***/ "./node_modules/highlight.js/lib/languages/elm.js": 
        /*!********************************************************!*\
          !*** ./node_modules/highlight.js/lib/languages/elm.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = function (hljs) {
                var COMMENT = {
                    variants: [
                        hljs.COMMENT('--', '$'),
                        hljs.COMMENT('{-', '-}', {
                            contains: ['self']
                        })
                    ]
                };
                var CONSTRUCTOR = {
                    className: 'type',
                    begin: '\\b[A-Z][\\w\']*',
                    relevance: 0
                };
                var LIST = {
                    begin: '\\(', end: '\\)',
                    illegal: '"',
                    contains: [
                        { className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?' },
                        COMMENT
                    ]
                };
                var RECORD = {
                    begin: '{', end: '}',
                    contains: LIST.contains
                };
                var CHARACTER = {
                    className: 'string',
                    begin: '\'\\\\?.', end: '\'',
                    illegal: '.'
                };
                return {
                    keywords: 'let in if then else case of where module import exposing ' +
                        'type alias as infix infixl infixr port effect command subscription',
                    contains: [
                        // Top-level constructions.
                        {
                            beginKeywords: 'port effect module', end: 'exposing',
                            keywords: 'port effect module where command subscription exposing',
                            contains: [LIST, COMMENT],
                            illegal: '\\W\\.|;'
                        },
                        {
                            begin: 'import', end: '$',
                            keywords: 'import as exposing',
                            contains: [LIST, COMMENT],
                            illegal: '\\W\\.|;'
                        },
                        {
                            begin: 'type', end: '$',
                            keywords: 'type alias',
                            contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]
                        },
                        {
                            beginKeywords: 'infix infixl infixr', end: '$',
                            contains: [hljs.C_NUMBER_MODE, COMMENT]
                        },
                        {
                            begin: 'port', end: '$',
                            keywords: 'port',
                            contains: [COMMENT]
                        },
                        // Literals and names.
                        CHARACTER,
                        hljs.QUOTE_STRING_MODE,
                        hljs.C_NUMBER_MODE,
                        CONSTRUCTOR,
                        hljs.inherit(hljs.TITLE_MODE, { begin: '^[_a-z][\\w\']*' }),
                        COMMENT,
                        { begin: '->|<-' } // No markup, relevance booster
                    ],
                    illegal: /;/
                };
            };
            /***/ 
        }),
        /***/ "./node_modules/highlight.js/lib/languages/shell.js": 
        /*!**********************************************************!*\
          !*** ./node_modules/highlight.js/lib/languages/shell.js ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = function (hljs) {
                return {
                    aliases: ['console'],
                    contains: [
                        {
                            className: 'meta',
                            begin: '^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]',
                            starts: {
                                end: '$', subLanguage: 'bash'
                            }
                        }
                    ]
                };
            };
            /***/ 
        }),
        /***/ "./node_modules/highlight.js/lib/languages/typescript.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/highlight.js/lib/languages/typescript.js ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = function (hljs) {
                var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
                var KEYWORDS = {
                    keyword: 'in if for while finally var new function do return void else break catch ' +
                        'instanceof with throw case default try this switch continue typeof delete ' +
                        'let yield const class public private protected get set super ' +
                        'static implements enum export import declare type namespace abstract ' +
                        'as from extends async await',
                    literal: 'true false null undefined NaN Infinity',
                    built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
                        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
                        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
                        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
                        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
                        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
                        'module console window document any number boolean string void Promise'
                };
                var DECORATOR = {
                    className: 'meta',
                    begin: '@' + JS_IDENT_RE,
                };
                var ARGS = {
                    begin: '\\(',
                    end: /\)/,
                    keywords: KEYWORDS,
                    contains: [
                        'self',
                        hljs.QUOTE_STRING_MODE,
                        hljs.APOS_STRING_MODE,
                        hljs.NUMBER_MODE
                    ]
                };
                var PARAMS = {
                    className: 'params',
                    begin: /\(/, end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: [
                        hljs.C_LINE_COMMENT_MODE,
                        hljs.C_BLOCK_COMMENT_MODE,
                        DECORATOR,
                        ARGS
                    ]
                };
                var NUMBER = {
                    className: 'number',
                    variants: [
                        { begin: '\\b(0[bB][01]+)n?' },
                        { begin: '\\b(0[oO][0-7]+)n?' },
                        { begin: hljs.C_NUMBER_RE + 'n?' }
                    ],
                    relevance: 0
                };
                var SUBST = {
                    className: 'subst',
                    begin: '\\$\\{', end: '\\}',
                    keywords: KEYWORDS,
                    contains: [] // defined later
                };
                var HTML_TEMPLATE = {
                    begin: 'html`', end: '',
                    starts: {
                        end: '`', returnEnd: false,
                        contains: [
                            hljs.BACKSLASH_ESCAPE,
                            SUBST
                        ],
                        subLanguage: 'xml',
                    }
                };
                var CSS_TEMPLATE = {
                    begin: 'css`', end: '',
                    starts: {
                        end: '`', returnEnd: false,
                        contains: [
                            hljs.BACKSLASH_ESCAPE,
                            SUBST
                        ],
                        subLanguage: 'css',
                    }
                };
                var TEMPLATE_STRING = {
                    className: 'string',
                    begin: '`', end: '`',
                    contains: [
                        hljs.BACKSLASH_ESCAPE,
                        SUBST
                    ]
                };
                SUBST.contains = [
                    hljs.APOS_STRING_MODE,
                    hljs.QUOTE_STRING_MODE,
                    HTML_TEMPLATE,
                    CSS_TEMPLATE,
                    TEMPLATE_STRING,
                    NUMBER,
                    hljs.REGEXP_MODE
                ];
                return {
                    aliases: ['ts'],
                    keywords: KEYWORDS,
                    contains: [
                        {
                            className: 'meta',
                            begin: /^\s*['"]use strict['"]/
                        },
                        hljs.APOS_STRING_MODE,
                        hljs.QUOTE_STRING_MODE,
                        HTML_TEMPLATE,
                        CSS_TEMPLATE,
                        TEMPLATE_STRING,
                        hljs.C_LINE_COMMENT_MODE,
                        hljs.C_BLOCK_COMMENT_MODE,
                        NUMBER,
                        {
                            begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                            keywords: 'return throw case',
                            contains: [
                                hljs.C_LINE_COMMENT_MODE,
                                hljs.C_BLOCK_COMMENT_MODE,
                                hljs.REGEXP_MODE,
                                {
                                    className: 'function',
                                    begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>', returnBegin: true,
                                    end: '\\s*=>',
                                    contains: [
                                        {
                                            className: 'params',
                                            variants: [
                                                {
                                                    begin: hljs.IDENT_RE
                                                },
                                                {
                                                    begin: /\(\s*\)/,
                                                },
                                                {
                                                    begin: /\(/, end: /\)/,
                                                    excludeBegin: true, excludeEnd: true,
                                                    keywords: KEYWORDS,
                                                    contains: [
                                                        'self',
                                                        hljs.C_LINE_COMMENT_MODE,
                                                        hljs.C_BLOCK_COMMENT_MODE
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            relevance: 0
                        },
                        {
                            className: 'function',
                            beginKeywords: 'function', end: /[\{;]/, excludeEnd: true,
                            keywords: KEYWORDS,
                            contains: [
                                'self',
                                hljs.inherit(hljs.TITLE_MODE, { begin: JS_IDENT_RE }),
                                PARAMS
                            ],
                            illegal: /%/,
                            relevance: 0 // () => {} is more typical in TypeScript
                        },
                        {
                            beginKeywords: 'constructor', end: /[\{;]/, excludeEnd: true,
                            contains: [
                                'self',
                                PARAMS
                            ]
                        },
                        {
                            begin: /module\./,
                            keywords: { built_in: 'module' },
                            relevance: 0
                        },
                        {
                            beginKeywords: 'module', end: /\{/, excludeEnd: true
                        },
                        {
                            beginKeywords: 'interface', end: /\{/, excludeEnd: true,
                            keywords: 'interface extends'
                        },
                        {
                            begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
                        },
                        {
                            begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
                        },
                        DECORATOR,
                        ARGS
                    ]
                };
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map