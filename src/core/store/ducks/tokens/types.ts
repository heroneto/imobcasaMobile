

export enum TokenTypes {
    LOAD_REQUEST = "@token/LOAD_REQUEST",
    LOAD_SUCCESS = "@token/LOAD_SUCCESS",
    LOAD_FAILURE = "@token/LOAD_FAILURE",
    LOAD_TOKENS_STORAGE = "@token/LOAD_TOKENS_STORAGE",
    LOAD_REFRESH_ACCESSTOKEN = "@token/LOAD_REFRESH_ACCESSTOKEN"
  }
  
  
  export interface Tokens {
    accessToken: string,
    refreshToken: string,
  }
  
  
  export interface TokenState {
    readonly data: Tokens
    readonly loading: boolean
    readonly error: boolean
  }
  
  