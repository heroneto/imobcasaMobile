import { action } from 'typesafe-actions';
import { Lead, LeadTypes } from './types';

export const list = () => action(LeadTypes.LIST)
export const successList = (data: Lead[]) => action(LeadTypes.SUCCESS_LIST, {data})
export const failureList = (response: string) => action(LeadTypes.FAILURE_LIST, {response})


export const reset = () => action(LeadTypes.RESET)
export const successReset = () => action(LeadTypes.SUCCESS_RESET) 
export const failureReset = () => action(LeadTypes.FAILURE_RESET)