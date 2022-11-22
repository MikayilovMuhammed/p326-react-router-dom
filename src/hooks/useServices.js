// export const usersServices = () => {};

import { CardsService } from "../APIs/Services/Cards";
import { PostsService } from "../APIs/Services/Posts";
import { UsersService } from "../APIs/Services/Users";

export const useServices = () => {
  const postService = new PostsService();
  const cardService = new CardsService();
  const usersService = new UsersService();

  return { postService, cardService, usersService };
};
