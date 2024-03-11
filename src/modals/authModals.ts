export interface SignInUserData {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface AuthState {
  isLoading: boolean;
  user: SignInUserData | null;
  error: string | null;
  isLoggedIn: boolean;
  isRegistered: boolean;
}

export interface userCredentialsLogin {
  email: string;
  password: string;
}
export interface userCredentialsRegister {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  role?: string;
}
export interface RegisterResponse {
  data: {
    data: {
      user: {
        name: string;
        email: string;
        role: string;
        _id: string;
        active: boolean;
      };
    };
  };
}
export interface LoginResponse {
  data: {
    status: string;
    token: string;
    message: string;

    data: {
      user: {
        name: string;
        email: string;
        role: string;
        _id: string;
        active: boolean;
      };
    };
  };
}

export interface ErrorState {
  status: string;
  message: string;
}
