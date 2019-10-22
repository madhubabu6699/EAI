import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  constructor(private ht: HttpClient) { }

  getMethod() {
    return this.ht.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");
  }

  postMethod(a) {
    return this.ht.post("http://localhost:3000/posts", a);
  }

}
