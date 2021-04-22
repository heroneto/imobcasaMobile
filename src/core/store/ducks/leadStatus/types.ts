

export enum LeadStatusTypes {
    LIST = "@leadStatus/LIST",
    SUCCESS_LIST = "@leadStatus/SUCCESS_LIST",
    FAILURE_LIST = "@leadStatus/FAILURE_LIST",


    RESET = "@leadStatus/RESET",
    SUCCESS_RESET = "@leadStatus/SUCCESS_RESET",
    FAILURE_RESET = "@leadStatus/FAILURE_RESET",
}
  
  
  export interface LeadStatus {
    id: string,
    name: string,
    description: string,
    order: number,
    createdAt: Date,
    updatedAt: Date
  }
  
  
  export interface LeadStatusState {
    readonly data: LeadStatus[]
    readonly loading: boolean
    readonly error: boolean
    readonly response: string
    readonly httpCode: number
  }
  
  