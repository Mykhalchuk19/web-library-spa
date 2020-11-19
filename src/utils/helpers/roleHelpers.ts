import {
  find, propEq,
} from 'ramda';
import { PermissionItem } from '../../interfaces/authInterfaces';

const getAccessByRole = (
  module: string,
  action: string,
  permissions: Array<PermissionItem>,
): boolean => {
  const currentModule: any = find(propEq('module', module))(permissions);
  return currentModule ? !!currentModule[action] : false;
};

export default getAccessByRole;
