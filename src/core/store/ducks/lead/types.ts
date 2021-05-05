

export enum LeadTypes {
    LIST = "@lead/LIST",
    SUCCESS_LIST = "@lead/SUCCESS_LIST",
    FAILURE_LIST = "@lead/FAILURE_LIST",


    RESET = "@lead/RESET",
    SUCCESS_RESET = "@lead/SUCCESS_RESET",
    FAILURE_RESET = "@lead/FAILURE_RESET",
}
  
  
  export interface Lead {
    id: string,
    name: string,
    phone: string,
    sourceid: string,
    formid: string,
    userid: string,
    active: true,
    statusid: string,
    negociationStartedAt: Date,
    negociationCompletedAt: Date | null,
    createdAt: Date,
    updatedAt: Date,
    formData: {
      name: string,
    },
    ownerData: {
      username: string,
      fullName: string
    }
  }
  
  
  export interface LeadState {
    readonly data: Lead[]
    readonly loading: boolean
    readonly error: boolean
    readonly response: string
    readonly httpCode: number
  }
  
  