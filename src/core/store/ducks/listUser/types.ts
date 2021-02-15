

export enum ListUserTypes {
  LOAD_REQUEST = "@listUser/LOAD_REQUEST",
  LOAD_SUCCESS = "@listUser/LOAD_SUCCESS",
  LOAD_FAILURE = "@listUser/LOAD_FAILURE",
}


export interface ListUser {
  id: string,
  fullName: string,
  username: string,
  email: string,
  admin: boolean,
  active: boolean,
  createdAt: Date,
  updatedAt: Date
}


export interface ListUserState {
  readonly data: ListUser[]
  readonly loading: boolean
  readonly error: boolean,
  readonly activeUsers?:ListUser[],
  readonly inactiveUsers?:ListUser[]
}

