import React, { ReactNode } from 'react';
import usePermissionComponent from './usePermissionComponent';

type TPermissionComponent = {
  module: string,
  action: string,
  children: ReactNode
}

const PermissionComponent: React.FC<TPermissionComponent> = ({ module, action, children }: TPermissionComponent) => {
  const { havePermissions } = usePermissionComponent(module, action);
  return (
    <>
      { havePermissions ? children : ''}
    </>
  );
};

export default PermissionComponent;
