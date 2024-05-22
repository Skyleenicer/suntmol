interface MyObject {
  [key: string]: any;
}

class CustomObject {
  private _storage: MyObject;

  constructor() {
    this._storage = {};
  }

  setItem(key: string, value: any): void {
    this._storage[key] = value;
  }

  getItem(key: string): any {
    return this._storage[key];
  }

  removeItem(key: string): void {
    delete this._storage[key];
  }

  clear(): void {
    this._storage = {};
  }
}

const myObj = new CustomObject();
