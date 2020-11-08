import React from 'react';
import usePermissionComponent from './usePermissionComponent';
import { TPermissionComponent } from '../../interfaces/componentInterfaces';

const PermissionComponent: React.FC<TPermissionComponent> = ({ module, action, children }: TPermissionComponent) => {
  const { havePermissions } = usePermissionComponent(module, action);
  return (
    <>
      { havePermissions ? children : ''}
    </>
  );
};

export default PermissionComponent;
