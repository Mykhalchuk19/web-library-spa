import { UserState } from './user/interfaces';

export type TStore = {
  _persist: any,
  router: any,
  user: UserState
}
