

export enum FormsTypes {
  REQUEST_LIST = "@forms/REQUEST_LIST",
  SUCCESS_REQUEST_LIST = "@forms/SUCCESS_REQUEST_LIST",
  FAILURE_REQUEST_LIST = "@forms/FAILURE_REQUEST_LIST",

  GET = "@forms/GET",
  SUCCESS_GET = "@forms/SUCCESS_GET",
  FAILURE_GET = "@forms/FAILURE_GET",

  CREATE = "@forms/CREATE",
  SUCCESS_CREATE = "@forms/SUCCESS_CREATE",
  FAILURE_CREATE = "@forms/FAILURE_CREATE",

  DISABLE = "@forms/DISABLE",
  SUCCESS_DISABLE = "@forms/SUCCESS_DISABLE",
  FAILURE_DISABLE = "@forms/FAILURE_DISABLE",

  ENABLE = "@forms/ENABLE",
  SUCCESS_ENABLE = "@forms/SUCCESS_ENABLE",
  FAILURE_ENABLE = "@forms/FAILURE_ENABLE",

  ADD_USER = "@forms/ADD_USER",
  SUCCESS_ADD_USER = "@forms/SUCCESS_ADD_USER",
  FAILURE_ADD_USER = "@forms/FAILURE_ADD_USER",

  REMOVE_USER = "@forms/REMOVE_USER",
  SUCCESS_REMOVE_USER = "@forms/SUCCESS_REMOVE_USER",
  FAILURE_REMOVE_USER = "@forms/FAILURE_REMOVE_USER",
}


export interface Form {
  id: string,
  name: string,
  fbCreatedDate: Date,
  fbFormId: string,
  active: boolean,
  createdAt: Date,
  updatedAt: Date
}

export interface FormState {
  readonly data: Form[]
  readonly loading: boolean
  readonly error: boolean
  readonly activeForms?:Form[]
  readonly inactiveForms?:Form[]
  readonly form: Form | null
  readonly createdForm: Form | null
  readonly response: string
}

