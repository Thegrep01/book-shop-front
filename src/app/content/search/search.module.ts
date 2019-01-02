import { SearchComponent } from './serach/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/materil.module';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBookComponent } from './search-book/search-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
];


@NgModule({
  declarations: [SearchComponent, SearchBookComponent],
  imports: [
    MaterialModule, RouterModule.forChild(routes), BrowserModule, FormsModule, ReactiveFormsModule
  ]
})
export class SearchModule { }
