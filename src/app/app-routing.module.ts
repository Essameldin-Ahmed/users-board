import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: 'src/app/home/home.module#HomeModule'},
  {path: 'about', loadChildren: 'src/app/about/about.module#AboutModule'},
  {path: 'contact', loadChildren: 'src/app/contact/contact.module#ContactModule'},
  {path: 'users', loadChildren: 'src/app/users/users.module#UsersModule', canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
  {path: 'login', loadChildren: 'src/app/auth/auth.module#AuthModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
