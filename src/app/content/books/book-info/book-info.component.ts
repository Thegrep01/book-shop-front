import { Book } from './../../../store/models/book.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

import * as BooksActions from '../../../store/actions/books.actions';
import { GetBookByID } from '../../../store/actions/books.actions';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  public selectedBook: Observable<Book>;
  public book: Book;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.selectedBook = this.store.select('book');
    this.selectedBook.subscribe(data => this.book = data);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new GetBookByID(id));
  }

}
