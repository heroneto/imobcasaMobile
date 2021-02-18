

export enum AuthTypes {
  LOGIN = "@auth/LOGIN",
  SUCCESS_LOGIN = "@auth/SUCCESS_LOGIN",
  FAILURE_LOGIN = "@auth/FAILURE_LOGIN",

  LOGOUT = "@auth/LOGOUT",
  SUCCESS_LOGOUT = "@auth/SUCCESS_LOGOUT",
  FAILURE_LOGOUT = "@auth/FAILURE_LOGOUT",

  CHECK = "@auth/CHECK",
  SUCCESS_CHECK = "@auth/SUCCESS_CHECK",
  FAILURE_CHECK = "@auth/FAILURE_CHECK", 

  RENEW = "@auth/RENEW",
  SUCCESS_RENEW = "@auth/SUCCESS_RENEW",
  FAILURE_RENEW = "@auth/FAILURE_RENEW", 
}


export interface Auth {
  response: string,
  httpCode: number
}

export interface AuthState {
  readonly data: Auth
  readonly loading: boolean
  readonly error: boolean
}

