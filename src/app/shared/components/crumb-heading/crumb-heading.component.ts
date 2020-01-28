import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeadingModel } from '../../models/heading.model';

@Component({
  selector: 'app-crumb-heading',
  templateUrl: './crumb-heading.component.html',
  styleUrls: ['./crumb-heading.component.scss']
})
export class CrumbHeadingComponent implements OnInit {
  @Input() headingData: HeadingModel
  @Output() callBackAction: EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  handleAction() {
    this.callBackAction.emit(true)
  }
}
