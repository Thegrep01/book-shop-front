import { MaterialModule } from './../../materil.module';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main', component: MenuComponent },

];

@NgModule({
  declarations: [MenuComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
  ]
})
export class MenuModule { }
