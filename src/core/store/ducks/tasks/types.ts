

export enum TaskTypes {
  LIST = "@task/LIST",
  SUCCESS_LIST = "@task/SUCCESS_LIST",
  FAILURE_LIST = "@task/FAILURE_LIST",

  ADD = "@task/ADD",
  SUCCESS_ADD = "@task/SUCCESS_ADD",
  FAILURE_ADD = "@task/FAILURE_ADD",

  

  RESET = "@task/RESET",
  SUCCESS_RESET = "@task/SUCCESS_RESET",
  FAILURE_RESET = "@task/FAILURE_RESET",
}


export interface Task {
  id: string,
  title: string,
  description: string,
  userid: string,
  leadid: string,
  active: boolean,
  startdate: Date,
  tasktypeid: string,
  updatedAt: Date,
  createdAt: Date,
}


export interface TaskState {
  readonly data: Task[]
  readonly loading: boolean
  readonly error: boolean
  readonly response: string
  readonly httpCode: number
}

