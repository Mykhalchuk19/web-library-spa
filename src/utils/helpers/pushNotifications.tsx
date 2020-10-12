import { toast, ToastOptions } from 'react-toastify';
import { ReactText } from 'react';

type TNotifications = {
  content: string | null | number,
  options?: ToastOptions
}

const PushNotifications = {
  error: ({ content, options = {} } : TNotifications): ReactText => toast.error(content, options),
  // eslint-disable-next-line max-len
  success: ({ content, options = {} } : TNotifications): ReactText => toast.success(content, options),
  warning: ({ content, options = {} } : TNotifications): ReactText => toast.warn(content, options),
  info: ({ content, options = {} } : TNotifications): ReactText => toast.info(content, options),
};

export default PushNotifications;
