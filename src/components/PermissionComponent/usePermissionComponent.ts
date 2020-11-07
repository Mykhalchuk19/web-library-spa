import { useEffect, useMemo } from 'react';
import { isEmpty } from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { userActions, userSelectors } from '../../state/user';
import { roleHelpers } from '../../utils/helpers';

type TUsePermissionComponent = {
    havePermissions: boolean
}

const usePermissionComponent = (module: string, action: string): TUsePermissionComponent => {
  const user = useSelector(userSelectors.getUserData);
  const myPermissions = useSelector(userSelectors.getMyPermissions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user || isEmpty(user)) dispatch(userActions.getCurrentUserRequest());
  }, [dispatch, user]);
  const havePermissions = useMemo(() => roleHelpers.getAccessByRole(module, action, myPermissions), [action, module, myPermissions]);
  return {
    havePermissions,
  };
};

export default usePermissionComponent;
