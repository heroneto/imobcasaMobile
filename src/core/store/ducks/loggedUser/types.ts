

export enum LoggedUserTypes {
    LOAD_REQUEST = "@loggedUser/LOAD_REQUEST",
    LOAD_SUCCESS = "@loggedUser/LOAD_SUCCESS",
    LOAD_FAILURE = "@loggedUser/LOAD_FAILURE",
  }
  
  
  export interface LoggedUser {
    id: string,
    fullName: string,
    email: string,
    isLogged: boolean
  }
  
  
  export interface LoggedUserState {
    readonly data: LoggedUser
    readonly loading: boolean
    readonly error: boolean
  }
  
  