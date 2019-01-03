import { SearchComponent } from './serach/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/materil.module';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBookComponent } from './search-book/search-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { BookInfoComponent } from '../books/book-info/book-info.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'search-result/:id', component: BookInfoComponent },
];


@NgModule({
  declarations: [SearchComponent, SearchBookComponent, SearchResultComponent],
  imports: [
    MaterialModule, RouterModule.forChild(routes), BrowserModule, FormsModule, ReactiveFormsModule
  ]
})
export class SearchModule { }
