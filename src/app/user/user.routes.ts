import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';

export const USER_ROUTES: Routes = [
  { path: 'detail', component: UserDetailComponent },
  { path: 'edit', component: UserEditComponent }
];
