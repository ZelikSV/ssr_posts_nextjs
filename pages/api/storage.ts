type UserDataType = {
  name: string;
  password: string;
};

class Storage<T = unknown> {
  name: string;
  password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }

  get getName(): string {
    return localStorage.getItem(this.name) ? JSON.parse(localStorage.getItem(this.name) as string) : '';
  }

  setUserData = (useData: UserDataType): void => {
    localStorage.setItem(this.name, JSON.stringify(useData.name));
    localStorage.setItem(this.password, JSON.stringify(useData.password));
  };
}

export const api = new Storage<UserDataType>('name', 'password');
