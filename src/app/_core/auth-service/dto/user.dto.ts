import { environment } from "@environments/environment";

export type SocialType = 'google' | 'facebook';
export type GrandType = 'password';
export type Langs = 'en' | 'deu' | 'ua';

export class CreateUserAccount{
  readonly email: string;
  readonly lang: Langs;
  readonly password: Langs;
}

export class UserAuthInfo{
  grant_type?: GrandType
  client_id?: string
  client_secret?: string
}

export class LoginUserAccount extends UserAuthInfo{
  readonly username: string;
  readonly password: Langs;
}