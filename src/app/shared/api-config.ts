import {environment} from '../../environments/environment';

const baseUri = environment.baseURI;
export const APIPath = {
  USERS: `${baseUri}/users`,
  AUTH: `${baseUri}/auth`,
};
