import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  //simulate an API call for a slow response
  getSomeText() {
    // return a response after 5 seconds
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is some text from the API');
      }, 5000);
    });
  }
}
