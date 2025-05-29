export interface UserState {
  isLoading: boolean;
  error: unknown;
  user: User;
  isUserUpdated:boolean
}
export interface User {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: 'user' | 'admin';
  __v: number;
  address: string;
}

export interface UserForm {
  name: string;
  email: string;
  address: string;
}
