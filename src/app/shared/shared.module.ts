import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PopupModelComponent } from './components/popup-model/popup-model.component';
import { CrumbHeadingComponent } from './components/crumb-heading/crumb-heading.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollerDirective } from './directives/infinit-scroller.directive';
import { MatDialogModule } from '@angular/material';
@NgModule({
  declarations: [
    HeaderComponent,
    UserCardComponent,
    BreadcrumbComponent,
    PopupModelComponent,
    CrumbHeadingComponent,
    InfiniteScrollerDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule

  ],
  exports: [
    HeaderComponent,
    UserCardComponent,
    BreadcrumbComponent,
    PopupModelComponent,
    CrumbHeadingComponent,
    InfiniteScrollerDirective,
    MatDialogModule
  ],
  entryComponents: [PopupModelComponent],
})
export class SharedModule { }
