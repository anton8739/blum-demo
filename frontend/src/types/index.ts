export interface PostI {
  id: number;
  attributes: {
    title: string;
    subTitle: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}
export interface UserI {
  blocked: boolean;
  confirmed: boolean;
  username: string;
  email: string;
  id: string;
  role: string;
}
