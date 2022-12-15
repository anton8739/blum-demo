import { PostI, UserI } from '../../types';

export interface GetPostsResponse {
  posts: {
    data: PostI[];
  };
}
export interface LoginResponse {
  login: {
    jwt: string;
    user: UserI;
  };
}
export interface RegistrationResponse {
  register: {
    jwt: string;
    user: UserI;
  };
}
