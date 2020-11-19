import { toast, ToastOptions } from 'react-toastify';
import { ReactText } from 'react';
import { t } from './translate';

type TNotifications = {
  content: string,
  options?: ToastOptions
}

const PushNotifications = {
  error: ({ content, options = {} } : TNotifications): ReactText => toast.error(t(`${content}`, 'toasts'), options),
  // eslint-disable-next-line max-len
  success: ({ content, options = {} } : TNotifications): ReactText => toast.success(t(`${content}`, 'toasts'), options),
  warning: ({ content, options = {} } : TNotifications): ReactText => toast.warn(t(`${content}`, 'toasts'), options),
  info: ({ content, options = {} } : TNotifications): ReactText => toast.info(t(`${content}`, 'toasts'), options),
};

export default PushNotifications;
