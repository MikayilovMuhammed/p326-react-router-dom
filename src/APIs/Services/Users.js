import { HttpClient } from "../HttpClient";

export class UsersService extends HttpClient {
  constructor() {
    super("https://624b18f944505084bc4c1fed.mockapi.io");
  }

  getAllUsers() {
    return this.get("users");
  }

  getUserById(id) {
    return this.get(`users/${id}`);
  }
}
