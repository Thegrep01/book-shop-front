import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../materil.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from './menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MenuModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavbarComponent,
    RouterModule,
    MenuModule
  ],
  declarations: [NavbarComponent]
})
export class SharedModule { }
