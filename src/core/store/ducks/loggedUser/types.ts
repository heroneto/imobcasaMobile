

export enum LoggedUserTypes {
    LOAD_REQUEST = "@loggedUser/LOAD_REQUEST",
    LOAD_SUCCESS = "@loggedUser/LOAD_SUCCESS",
    LOAD_FAILURE = "@loggedUser/LOAD_FAILURE",
    LOAD_EDIT_USER = "@loggedUser/LOAD_EDIT_USER",
    LOAD_LOGOUT = "@loggedUser/LOAD_LOGOUT",
  }
  
  
  export interface LoggedUser {
    id: string,
    fullName: string,
    username: string,
    admin: boolean,
    email: string,
    isLogged:boolean,
    active: boolean
  }
  
  
  export interface LoggedUserState {
    readonly data: LoggedUser
    readonly loading: boolean
    readonly error: boolean
  }
  
  