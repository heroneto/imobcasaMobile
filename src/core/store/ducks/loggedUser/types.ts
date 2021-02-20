

export enum LoggedUserTypes {
    GET = "@loggedUser/GET",
    SUCCESS_GET = "@loggedUser/SUCCESS_GET",
    FAILURE_GET = "@loggedUser/FAILURE_GET",

    CHANGE_PASSWORD = "@loggedUser/CHANGE_PASSWORD",
    SUCCESS_CHANGE_PASSWORD = "@loggedUser/SUCCESS_CHANGE_PASSWORD",
    FAILURE_CHANGE_PASSWORD = "@loggedUser/FAILURE_CHANGE_PASSWORD",

    EDIT = "@loggedUser/EDIT",
    SUCCESS_EDIT = "@loggedUser/SUCCESS_EDIT",
    FAILURE_EDIT = "@loggedUser/FAILURE_EDIT",
  }
  
  
  export interface LoggedUser {
    id: string,
    fullName: string,
    username: string,
    admin: boolean,
    email: string,
    isLogged: boolean,
    active: boolean
  }
  
  
  export interface LoggedUserState {
    readonly data: LoggedUser
    readonly loading: boolean
    readonly error: boolean
    readonly response: string
    readonly httpCode: number
  }
  
  