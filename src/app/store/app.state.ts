import { Comics } from './models/comics.model';
import { Book } from './models/book.model';

export interface AppState {
    readonly booksList: Book[];
    readonly book: Book;
    readonly searchResult: any[];
    readonly comicsList: Comics[];
    readonly comics: Comics;
}

