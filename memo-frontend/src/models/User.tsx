export interface User {
  id: number,
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export class UserState implements User {
  createdAt: string = '';
  email: string = '';
  firstName: string = '';
  id: number = 0;
  lastName: string = '';
  updatedAt: string = '';

}