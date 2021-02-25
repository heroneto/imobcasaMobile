

export enum FacebookFormsTypes {
  LIST = "@facebookForms/LIST_FACEBOOK_FORMS",
  SUCCESS_LIST = "@facebookForms/SUCCESS_LIST",
  FAILURE_LIST = "@facebookForms/FAILURE_LIST",

  LOAD_MORE = "@facebookForms/LOAD_MORE_FACEBOOK_FORMS",
  SUCCESS_LOAD_MORE = "@facebookForms/SUCCESS_LOAD_MORE",
  FAILURE_LOAD_MORE = "@facebookForms/FAILURE_LIST",
}


export interface FacebookForm {
  id: string,
  name: string,
  status: string,
  locale: string
}

export interface Data {
  forms: FacebookForm[],
  after: string,
  next: string
}


export interface FacebookFormsState {
  readonly data: Data
  readonly loading: boolean
  readonly error: boolean
  readonly selectedForm: FacebookForm | null
  readonly response: string
}

