import { UsersList } from '../../data/users-list';
import { IUser } from './../../interfaces/user/user.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  
  @Input({ required: true, alias: 'usersList' }) usersList: IUser[] = [];

  @Output('userSelected') userSelectedEmitt: EventEmitter<IUser> = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }  
}
