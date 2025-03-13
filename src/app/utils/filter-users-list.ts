import { isWithinInterval } from 'date-fns';
import { IUser } from '../interfaces/user/user.interface';
import { IFilterOptions } from '../interfaces/filter-options.interface';

const filterUserListByName = (
  name: string | undefined,
  usersList: IUser[]
): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined || name === '';
  if (NAME_NOT_TYPPED) {
    return usersList;
  }
  const filteredList = usersList.filter((user) =>
    user.nome.toLowerCase().includes(name?.toLowerCase() as string)
  );
  return filteredList;
};

const filterUserListByStatus = (
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined;
  if (STATUS_NOT_SELECTED) {
    return usersList;
  }
  const filteredListByStatus = usersList.filter(
    (user) => user.ativo === status
  );
  return filteredListByStatus;
};

const filterUserLIstByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] => {
  const START_DATE_NOT_SELECTED = startDate === undefined || endDate === null;
  if (START_DATE_NOT_SELECTED) {
    return usersList;
  }
  const filteredList = usersList.filter((user) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate as Date,
      end: endDate as Date,
    })
  );

  return filteredList;
};

const filterUsersList = (
  filterOptions: IFilterOptions,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUserListByName(filterOptions.name, usersList);
  filteredList = filterUserListByStatus(filterOptions.status, filteredList);
  filteredList = filterUserLIstByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList;
};

export { filterUsersList };