import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigurationService {
  private config: Object;
  constructor() { }

  load() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.config = {};
        resolve();
      }, 5000);
    });

    return promise;
  }

  getConfig() {
    return this.config;
  }
}
