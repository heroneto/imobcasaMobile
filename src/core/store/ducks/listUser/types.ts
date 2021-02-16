

export enum ListUserTypes {
  REQUEST_LIST = "@listUser/REQUEST_LIST",
  SUCCESS_REQUEST_LIST = "@listUser/SUCCESS_REQUEST_LIST",
  FAILURE_REQUEST_LIST = "@listUser/FAILURE_REQUEST_LIST",

  SELECT = "@listUser/SELECT",
  SUCCESS_SELECT = "@listUser/SUCCESS_SELECT",
  FAILURE_SELECT = "@listUser/FAILURE_SELECT",

  EDIT = "@listUser/EDIT",
  SUCCESS_EDIT = "@listUser/SUCCESS_EDIT",
  FAILURE_EDIT = "@listUser/FAILURE_EDIT",
  
  RESET_PASSWORD = "@listUser/RESET_PASSWORD",
  SUCCESS_RESET_PASSWORD = "@listUser/SUCCESS_RESET_PASSWORD",
  FAILURE_RESET_PASSWORD = "@listUser/FAILURE_RESET_PASSWORD",
  
  CREATE = "@listUser/CREATE",
  SUCCESS_CREATE = "@listUser/SUCCESS_CREATE",
  FAILURE_CREATE = "@listUser/FAILURE_CREATE",

  DELETE = "@listUser/DELETE",
  SUCCESS_DELETE = "@listUser/SUCCESS_DELETE",
  FAILURE_DELETE = "@listUser/FAILURE_DELETE",
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

export interface ListUserState {
  readonly data: User[]
  readonly loading: boolean
  readonly error: boolean
  readonly activeUsers?:User[]
  readonly inactiveUsers?:User[]
  readonly selectedUser: User
  readonly response: string
}

