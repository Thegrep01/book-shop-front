import { Book } from './models/book.model';

export interface AppState {
    readonly booksList: Book[];
    readonly book: Book;
    readonly searchResult: any[];
}

