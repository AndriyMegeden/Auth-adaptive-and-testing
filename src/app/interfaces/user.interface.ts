export interface AuthInfo{
  avatar?: string;
  role?: string;
  firstName?: string;
}

export interface User extends AuthInfo{
  userId: string
  email: string;
}