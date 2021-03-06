import { JsonDecoder } from 'ts.data.json';
import { AuthorItem } from './model';

export const AuthorItemDecoder = JsonDecoder.object<AuthorItem>({
    author: JsonDecoder.string,
    age: JsonDecoder.number,
    books: JsonDecoder.array<string>(JsonDecoder.string, 'AuthorItemBooks[]'),
    alive: JsonDecoder.boolean
}, 'AuthorItemDecoder');

export const AuthorListDecoder = JsonDecoder.array<AuthorItem>(
    AuthorItemDecoder, 'AuthorItemDecoder[]'
);
