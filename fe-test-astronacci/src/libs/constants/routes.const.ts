export class Routes {
  // BASE
  static API_AUTH = '/auth';
  static API_CONTENT = '/content';
  static API_GATEWAY = '/v1';
  static API_MEDIA = '/media';
  static API_USER = '/user';

  // AUTH
  static AUTH_LOGIN = Routes.API_AUTH + '/login';
  static AUTH_GOOGLE_LOGIN = Routes.API_AUTH + '/login/google';
  static AUTH_FACEBOOK_LOGIN = Routes.API_AUTH + '/login/facebook';
  static AUTH_REGISTER = Routes.API_AUTH + '/register';

  // CONTENT
  static CONTENT = Routes.API_CONTENT;

  // USER
  static USER = Routes.API_USER;
}
