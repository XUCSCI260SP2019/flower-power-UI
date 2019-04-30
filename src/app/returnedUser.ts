export class RUser {
  username: string;
  FirstName: string;
  LastName: string;
  admin: boolean;
  email: string;
  loggedIn: boolean;
  // store the information we receive from login

  constructor() {}
  setLogin(): void {
    this.loggedIn = true;
  }
  login(): boolean {
    return this.loggedIn;
  }
}
