import { BooksService } from './books.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookInfoComponent } from './book-info/book-info.component';

const routes: Routes = [
  { path: 'books', component: BooksListComponent },
  { path: 'books/:id', component: BookInfoComponent },
];

@NgModule({
  declarations: [BooksListComponent, BookInfoComponent],
  imports: [
    SharedModule, RouterModule.forChild(routes),
  ],
  providers: [BooksService],
})
export class BooksModule { }
