import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PopupModelComponent } from './components/popup-model/popup-model.component';
import { CrumbHeadingComponent } from './components/crumb-heading/crumb-heading.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
  declarations: [
    HeaderComponent,
    UserCardComponent,
    BreadcrumbComponent,
    PopupModelComponent,
    CrumbHeadingComponent,
    SpinnerComponent
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
    MatDialogModule,
    SpinnerComponent
  ],
  entryComponents: [PopupModelComponent],
})
export class SharedModule { }
