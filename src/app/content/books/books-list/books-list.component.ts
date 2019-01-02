import { Book } from './../../../store/models/book.model';
import { AppState } from './../../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BooksActions from '../../../store/actions/books.actions';
import { Observable } from 'rxjs';
import { GetBooksList } from '../../../store/actions/books.actions';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  public bookList: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.bookList = this.store.select('bookList');
  }

  ngOnInit() {
    this.store.dispatch(new GetBooksList());
  }

}
