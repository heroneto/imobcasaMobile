

export enum TaskTypes {
  ADD = "@task/ADD",
  SUCCESS_ADD = "@task/SUCCESS_ADD",
  FAILURE_ADD = "@task/FAILURE_ADD",

  GET = "@task/GET",
  SUCCESS_GET = "@task/SUCCESS_GET",
  FAILURE_GET = "@task/FAILURE_GET",

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
  createdAt: Date
}

export interface TaskState {
  readonly data: Task | null
  readonly loading: boolean
  readonly error: boolean
  readonly response: string
  readonly httpCode: number
}

