

export enum TokenTypes {
  LOAD_REQUEST = "@token/LOAD_REQUEST",
  LOAD_SUCCESS = "@token/LOAD_SUCCESS",
  LOAD_FAILURE = "@token/LOAD_FAILURE"
}


export interface Token {
  accessToken: String,
  refreshToken: String,
}


export interface TokenState {
  readonly data: Token
  readonly loading: boolean
  readonly error: boolean
}

