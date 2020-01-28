import { Component, OnInit, Input } from '@angular/core';
import { BreadCrumbModel } from '../../models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadCrumbData: BreadCrumbModel
  constructor() { }

  ngOnInit() {
  }

}
