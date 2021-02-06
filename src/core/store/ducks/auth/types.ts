

export enum AuthTypes {
    LOAD_REQUEST = "@auth/LOAD_REQUEST",
    LOAD_SUCCESS = "@auth/LOAD_SUCCESS",
    LOAD_FAILURE = "@auth/LOAD_FAILURE",
    LOAD_TOKENS_STORAGE = "@auth/LOAD_TOKENS_STORAGE",
    LOAD_REFRESH_ACCESSTOKEN = "@auth/LOAD_REFRESH_ACCESSTOKEN"
  }
  
  
  export interface Auth {
    accessToken: string,
    refreshToken: string,
  }
  
  
  export interface AuthState {
    readonly data: Auth
    readonly loading: boolean
    readonly error: boolean
  }
  
  