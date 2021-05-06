

export enum LeadSourceTypes {
    LIST = "@leadSources/LIST",
    SUCCESS_LIST = "@leadSources/SUCCESS_LIST",
    FAILURE_LIST = "@leadSources/FAILURE_LIST",


    RESET = "@leadSources/RESET",
    SUCCESS_RESET = "@leadSources/SUCCESS_RESET",
    FAILURE_RESET = "@leadSources/FAILURE_RESET",
}
  
  
  export interface LeadSource {
    id: string,
    name: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date
  }
  
  
  export interface LeadSourceState {
    readonly data: LeadSource[]
    readonly loading: boolean
    readonly error: boolean
    readonly response: string
    readonly httpCode: number
  }
  
  