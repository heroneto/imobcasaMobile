

export enum SelectedUserTypes {
    LOAD_REQUEST = "@selectedUser/LOAD_REQUEST",
    LOAD_SUCCESS = "@selectedUser/LOAD_SUCCESS",
    LOAD_FAILURE = "@selectedUser/LOAD_FAILURE",
    LOAD_EDIT_USER = "@selectedUser/LOAD_EDIT_USER",
  }
  
  
  export interface SelectedUser {
    id: string,
    fullName: string,
    username: string,
    admin: boolean,
    email: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date,
  }
  
  
  export interface SelectedUserState {
    readonly data: SelectedUser
    readonly loading: boolean
    readonly error: boolean
    readonly response: string
  }
  
  