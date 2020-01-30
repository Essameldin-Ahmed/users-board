import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() cardData: {userData: UserModel,active: boolean, smallView: boolean } 

  
  @Output() cardClicked: EventEmitter<UserModel> = new EventEmitter()
  @Output() editClicked: EventEmitter<UserModel> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<UserModel> = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  handleCardClicked() {
    this.cardClicked.emit(this.cardData.userData);
  }

  handleEditClicked(e: Event) {
    e.stopPropagation()
    this.editClicked.emit(this.cardData.userData);
  }

  handleDeleteClicked(e: Event) {
    e.stopPropagation()
    this.deleteClicked.emit(this.cardData.userData);
  }
}
