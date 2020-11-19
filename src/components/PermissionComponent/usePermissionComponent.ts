import { useEffect, useMemo } from 'react';
import { isEmpty } from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { authActions, authSelectors } from '../../state/auth';
import getAccessByRole from '../../utils/helpers/roleHelpers';

type TUsePermissionComponent = {
    havePermissions: boolean
}

const usePermissionComponent = (module: string, action: string): TUsePermissionComponent => {
  const user = useSelector(authSelectors.getUserData);
  const myPermissions = useSelector(authSelectors.getMyPermissions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user || isEmpty(user)) dispatch(authActions.getCurrentUserRequest());
  }, [dispatch, user]);

  const havePermissions = useMemo(
    () => getAccessByRole(module, action, myPermissions),
    [action, module, myPermissions],
  );
  return {
    havePermissions,
  };
};

export default usePermissionComponent;
