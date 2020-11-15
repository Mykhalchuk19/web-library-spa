import { UserState } from './user/interfaces';
import { TCategoriesState } from '../interfaces/categoriesInterfaces';

export type TStore = {
  _persist: any,
  router: any,
  user: UserState,
  categories: TCategoriesState
}
