// import libs
import { create } from 'apisauce';
// import App's config
import AppConfig from 'config/appConfig';

export const ROUTES = {
  // Auths
  LOGIN: `login`,
  API_LIST_USER: `users`
};

export const API = create({
  baseURL: AppConfig.API_URL
});

export const resetRequest = route => {
  API.addRequestTransform(request => {
    request.url = route;
  });
};
