import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  UsersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.UsersListFiltered = this.usersList;
    }, 1);
  }

  onFilter(filterOptions: IFilterOptions) {
    this.UsersListFiltered = filterUsersList(filterOptions, this.usersList)
  }
}
