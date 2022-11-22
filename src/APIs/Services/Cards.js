import { HttpClient } from "../HttpClient";

export class CardsService extends HttpClient {
  constructor() {
    super("https://jsonplaceholder.typicode.com");
  }

  getAllCards() {
    return this.get("cards");
  }

  postNewCards(body) {
    return this.post("cards", body);
  }

  editCard(id, body) {
    return this.put("cards", body, id);
  }
}
