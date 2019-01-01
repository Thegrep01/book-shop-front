import { Book } from './../../../store/models/book.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';

import * as BooksActions from '../../../store/actions/books.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  public selectedBook: Observable<Book>;
  public book: Book;


  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new BooksActions.GetBookByID(id));
    this.selectedBook = this.store.select('book');
    this.selectedBook.subscribe(data => this.book = data);
  }

}
