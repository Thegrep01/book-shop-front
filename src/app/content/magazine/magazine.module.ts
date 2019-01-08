import { MagazineService } from './magazine.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Routes, RouterModule } from '@angular/router';
import { MagazineListComponent } from './magazine-list/magazine-list.component';
import { MagazineInfoComponent } from './magazine-info/magazine-info.component';

const routes: Routes = [
  { path: 'magazine', component: MagazineListComponent },
  { path: 'magazine/:id', component: MagazineInfoComponent },
];

@NgModule({
  declarations: [MagazineListComponent, MagazineInfoComponent],
  imports: [
    SharedModule, RouterModule.forChild(routes),
  ],
  providers: [MagazineService],
})
export class MagazineModule { }
