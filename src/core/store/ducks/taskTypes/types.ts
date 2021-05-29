

export enum TaskTypesTypes {
  LIST = "@taskTypes/LIST",
  SUCCESS_LIST = "@taskTypes/SUCCESS_LIST",
  FAILURE_LIST = "@taskTypes/FAILURE_LIST",

  RESET = "@taskTypes/RESET",
  SUCCESS_RESET = "@taskTypes/SUCCESS_RESET",
  FAILURE_RESET = "@taskTypes/FAILURE_RESET",
}


export interface TaskTypes {
  id: string,
  name: string,
  description: string,
  active: boolean,
  createdAt: Date,
  updatedAt: Date
}

export interface TaskTypesState {
  readonly data: TaskTypes[]
  readonly loading: boolean
  readonly error: boolean
  readonly response: string
  readonly httpCode: number
}

