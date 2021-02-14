

export enum ChangeMyPasswordTypes {
    LOAD_REQUEST = "@changePassword/LOAD_REQUEST",
    LOAD_SUCCESS = "@changePassword/LOAD_SUCCESS",
    LOAD_FAILURE = "@changePassword/LOAD_FAILURE",
    LOAD_RESET_STORE = "@changePassword/LOAD_RESET_STORE",
  }
  
  
  export interface ChangeMyPassword {
    response: string
  }
  
  
  export interface ChangeMyPasswordState {
    readonly data: ChangeMyPassword
    readonly loading: boolean
    readonly error: boolean
  }
  
  