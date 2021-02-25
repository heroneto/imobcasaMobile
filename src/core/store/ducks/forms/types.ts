

export enum FormsTypes {
  REQUEST_LIST = "@forms/REQUEST_LIST",
  SUCCESS_REQUEST_LIST = "@forms/SUCCESS_REQUEST_LIST",
  FAILURE_REQUEST_LIST = "@forms/FAILURE_REQUEST_LIST",

  SELECT = "@forms/SELECT",
  SUCCESS_SELECT = "@forms/SUCCESS_SELECT",
  FAILURE_SELECT = "@forms/FAILURE_SELECT",

  CREATE = "@forms/CREATE",
  SUCCESS_CREATE = "@forms/SUCCESS_CREATE",
  FAILURE_CREATE = "@forms/FAILURE_CREATE",

  DISABLE = "@forms/DISABLE",
  SUCCESS_DISABLE = "@forms/SUCCESS_DISABLE",
  FAILURE_DISABLE = "@forms/FAILURE_DISABLE",


  ENABLE = "@forms/ENABLE",
  SUCCESS_ENABLE = "@forms/SUCCESS_ENABLE",
  FAILURE_ENABLE = "@forms/FAILURE_ENABLE",
}


export interface Form {
  id: string,
  name: string,
  fbCreatedDate: string,
  fbFormId: string,
  active: boolean,
  createdAt: Date,
  updatedAt: Date
}

export interface UsersState {
  readonly data: Form[]
  readonly loading: boolean
  readonly error: boolean
  readonly activeForms?:Form[]
  readonly inactiveForms?:Form[]
  readonly selectedForm: Form
  readonly response: string
}

