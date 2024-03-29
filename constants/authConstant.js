/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const JWT = {
  DEVICE_SECRET:'myjwtdevicesecret',
  ADMIN_SECRET:'myjwtadminsecret',
  EXPIRES_IN: 10000
};

const USER_TYPES = {
  User:1,
  Admin:2,
};

const PLATFORM = {
  DEVICE:1,
  ADMIN:2,
};

let LOGIN_ACCESS = {
  [USER_TYPES.User]:[PLATFORM.DEVICE],           
  [USER_TYPES.Admin]:[PLATFORM.ADMIN],           
};

const MAX_LOGIN_RETRY_LIMIT = 3;
const LOGIN_REACTIVE_TIME = 5;
    
const FORGOT_PASSWORD_WITH = {
  LINK: {
    sms: true,
    email: false
  },
  EXPIRE_TIME: 5
};

const NO_OF_DEVICE_ALLOWED = 1;

module.exports = {
  JWT,
  USER_TYPES,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
  NO_OF_DEVICE_ALLOWED,
};