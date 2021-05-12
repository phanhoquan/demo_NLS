// import libs
import { create } from 'apisauce';

export const ROUTES = {
  // Auths
  LOGIN: `login`,
  API_LIST_USER: `users`
};

export const API = create({
  baseURL: process.env.REACT_APP_API_URL
});

export const resetRequest = route => {
  API.addRequestTransform(request => {
    request.url = route;
  });
};
