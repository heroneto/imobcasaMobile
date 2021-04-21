
import { User as UserInterface } from '../users/types'

export enum UserFormTypes {
  REQUEST_LIST = "@userForm/REQUEST_LIST",
  SUCCESS_REQUEST_LIST = "@userForm/SUCCESS_REQUEST_LIST",
  FAILURE_REQUEST_LIST = "@userForm/FAILURE_REQUEST_LIST",

  LIST_NOT_RELATED_USERS = "@userForm/LIST_NOT_RELATED_USERS",
  SUCCESS_LIST_NOT_RELATED_USERS = "@userForm/SUCCESS_LIST_NOT_RELATED_USERS",
  FAILURE_LIST_NOT_RELATED_USERS = "@userForm/FAILURE_LIST_NOT_RELATED_USERS",

  ADD = "@userForm/ADD",
  SUCCESS_ADD = "@userForm/SUCCESS_ADD",
  FAILURE_ADD = "@userForm/FAILURE_ADD",

  REMOVE = "@userForm/REMOVE",
  SUCCESS_REMOVE = "@userForm/SUCCESS_REMOVE",
  FAILURE_REMOVE = "@userForm/FAILURE_REMOVE",
  
  RESET_STORE = "@userForm/RESET_STORE",
  SUCCESS_RESET_STORE = "@userForm/SUCCESS_RESET_STORE",
  FAILURE_RESET_STORE = "@userForm/FAILURE_RESET_STORE",
}


export interface UserForm {
  id: string,
  formid: string,
  userid: string,
  lastLeadReceivedTime: Date,
  score: number | null,
  enabled: number,
  createdAt: Date,
  updatedAt: Date,
  userData: {
    username: string,
    fullName: string
  }
}


export interface User extends UserInterface{
  
}

export interface UserFormState {
  readonly data: UserForm[]
  readonly loading: boolean
  readonly error: boolean
  readonly response: string,
  readonly usersNotRelated: User[]
}
