

export enum UsersTypes {
  REQUEST_LIST = "@users/REQUEST_LIST",
  SUCCESS_REQUEST_LIST = "@users/SUCCESS_REQUEST_LIST",
  FAILURE_REQUEST_LIST = "@users/FAILURE_REQUEST_LIST",

  SELECT = "@users/SELECT",
  SUCCESS_SELECT = "@users/SUCCESS_SELECT",
  FAILURE_SELECT = "@users/FAILURE_SELECT",

  EDIT = "@users/EDIT",
  SUCCESS_EDIT = "@users/SUCCESS_EDIT",
  FAILURE_EDIT = "@users/FAILURE_EDIT",
  
  RESET_PASSWORD = "@users/RESET_PASSWORD",
  SUCCESS_RESET_PASSWORD = "@users/SUCCESS_RESET_PASSWORD",
  FAILURE_RESET_PASSWORD = "@users/FAILURE_RESET_PASSWORD",
  
  CREATE = "@users/CREATE",
  SUCCESS_CREATE = "@users/SUCCESS_CREATE",
  FAILURE_CREATE = "@users/FAILURE_CREATE",

  DELETE = "@users/DELETE",
  SUCCESS_DELETE = "@users/SUCCESS_DELETE",
  FAILURE_DELETE = "@users/FAILURE_DELETE",
}


export interface User {
  id: string,
  fullName: string,
  username: string,
  email: string,
  admin: boolean,
  active: boolean,
  createdAt: Date,
  updatedAt: Date
}

export interface CreateUserProps extends Omit<User, "createdAt" | "updatedAt" | "id"> {
  password: string
}

export interface UsersState {
  readonly data: User[]
  readonly loading: boolean
  readonly error: boolean
  readonly activeUsers?:User[]
  readonly inactiveUsers?:User[]
  readonly selectedUser: User
  readonly response: string
}

