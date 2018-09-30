import { Notification } from 'element-ui';
import { logger } from '@/lib/logger.js';
import store from '../store';

export default function notifyError(error) {
  let baseUrl = store.state.config.config.apiBaseUrl;

  logger().error({
    serverData: error.response.data,
    serverError: error.response.data.error,
    serverMsg: error.response.data.message,
    serverCode: error.response.data.statusCode
  });

  Notification.error({
    message: error.toString(),
    title: `Cannot connect to API ${baseUrl}`,
    duration: 0
  });
}
