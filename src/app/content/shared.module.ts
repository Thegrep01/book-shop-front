import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../materil.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { SearchModule } from './search/search.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MenuModule,
    SearchModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavbarComponent,
    RouterModule,
    MenuModule,
    SearchModule
  ],
  declarations: [NavbarComponent]
})
export class SharedModule { }
