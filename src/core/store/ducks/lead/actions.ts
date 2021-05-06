import { action } from 'typesafe-actions';
import { Lead, LeadTypes } from './types';

export const list = () => action(LeadTypes.LIST)
export const successList = (data: Lead[]) => action(LeadTypes.SUCCESS_LIST, {data})
export const failureList = (response: string) => action(LeadTypes.FAILURE_LIST, {response})


export const add = (data: Omit<Lead, 
    "id" | 
    "negociationCompletedAt" | 
    "createdAt" | 
    "updatedAt" | 
    "formData" | 
    "ownerData">
    ) => action(LeadTypes.ADD, { data })
export const successAdd = (response: string) => action(LeadTypes.SUCCESS_ADD, {response})
export const failureAdd = (response: string) => action(LeadTypes.FAILURE_ADD, {response})


// TODO - Implementar listagem por status
// export const listByStatys = (statusId: string) => action(LeadTypes.LIST, { statusId })
// export const successListByStatus = (data: Lead[]) => action(LeadTypes.SUCCESS_LIST, {data})
// export const failureListByStatus = (response: string) => action(LeadTypes.FAILURE_LIST, {response})


export const reset = () => action(LeadTypes.RESET)
export const successReset = () => action(LeadTypes.SUCCESS_RESET) 
export const failureReset = () => action(LeadTypes.FAILURE_RESET)