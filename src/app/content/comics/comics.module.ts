import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicsInfoComponent } from './comics-info/comics-info.component';

const routes: Routes = [
  { path: 'comics', component: ComicsListComponent },
  { path: 'comics/:id', component: ComicsInfoComponent },
];

@NgModule({
  declarations: [ComicsListComponent, ComicsInfoComponent],
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ]
})
export class ComicsModule { }
