

export enum LeadDetailsTypes {
  GET = "@leadDetails/GET",
  SUCCESS_GET = "@leadDetails/SUCCESS_GET",
  FAILURE_GET = "@leadDetails/FAILURE_GET",

  EDIT = "@leadDetails/EDIT",
  SUCCESS_EDIT = "@leadDetails/SUCCESS_EDIT",
  FAILURE_EDIT = "@leadDetails/FAILURE_EDIT",

  RESET_STORE = "@leadDetails/RESET_STORE",
  SUCCESS_RESET_STORE = "@leadDetails/SUCCESS_RESET_STORE",
  FAILURE_RESET_STORE = "@leadDetails/FAILURE_RESET_STORE",


}


export interface LeadEditPayload  {
	id: string, 
	name: string, 
  phone: number, 
  sourceid: string, 
  formid: string,
  userid: string
}

export interface Task {
  active: boolean,
  createdAt: Date,
  description: string,
  id: string,
  leadid: string,
  ownerData: {
    fullName: string,
    username: string
  },
  resolutiondate: Date | null,
  startdate: Date,
  tasktypeid: string,
  title: string,
  updatedAt: Date,
  userid: string,
  taskTypeData: {
    name: string,
    description: string
  }
}


export interface LeadDetails {
  id: string,
  name: string,
  phone: string,
  sourceid: string,
  formid: string,
  userid: string,
  active: boolean,
  statusid: string,
  negociationStartedAt: Date,
  negociationCompletedAt: Date | null,
  createdAt: Date,
  updatedAt: Date,
  ownerData: {
    fullName: string,
    username: string,
  },
  formData: {
    name: string
  },
  sourceData: {
    name: string
  },
  statusData: {
    name: string
  }
  tasks: Array<Task> 
}


export interface LeadDetailsState {
  readonly data: LeadDetails | null
  readonly loading: boolean
  readonly error: boolean
  readonly response: string
  readonly httpCode: number
}

