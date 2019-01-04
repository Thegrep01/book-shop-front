import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../materil.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { SearchModule } from './search/search.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MenuModule,
    SearchModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavbarComponent,
    RouterModule,
    MenuModule,
    SearchModule,
    FlexLayoutModule
  ],
  declarations: [NavbarComponent]
})
export class SharedModule { }
