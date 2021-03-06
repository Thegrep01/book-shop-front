import { SearchEffects } from './store/effects/search.effect';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './content/shared.module';
import { BooksModule } from './content/books/books.module';

import { StoreModule } from '@ngrx/store';
import { booksReducer, bookReducer } from './store/reducers/book.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/effects/books.effect';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { searchReducer } from './store/reducers/search.reducer';
import { ComicsModule } from './content/comics/comics.module';
import { comicsListReducer, comicsReducer } from './store/reducers/comics.reducer';
import { ComicsEffects } from './store/effects/comics.effect';
import { magazinesReducer, magazineReducer, magazineDateReducer } from './store/reducers/magazine.reducer';
import { MagazineEffects } from './store/effects/magazine.effect';
import { MagazineModule } from './content/magazine/magazine.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    BooksModule,
    StoreModule.forRoot({
      bookList: booksReducer,
      book: bookReducer,
      searchResult: searchReducer,
      comicsList: comicsListReducer,
      comics: comicsReducer,
      magazineList: magazinesReducer,
      magazine: magazineReducer,
      dates: magazineDateReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([BooksEffects, SearchEffects, ComicsEffects, MagazineEffects]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComicsModule,
    MagazineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
