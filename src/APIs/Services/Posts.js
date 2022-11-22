import { HttpClient } from "../HttpClient";

export class PostsService extends HttpClient {
  constructor() {
    super("https://jsonplaceholder.typicode.com");
  }

  getAllPosts() {
    return this.get("posts");
  }
}
