import { action } from 'typesafe-actions';
import { LeadStatus, LeadStatusTypes } from './types';

export const list = () => action(LeadStatusTypes.LIST)
export const successList = (data: LeadStatus[]) => action(LeadStatusTypes.SUCCESS_LIST, {data})
export const failureList = (response: string) => action(LeadStatusTypes.FAILURE_LIST, {response})

export const reset = () => action(LeadStatusTypes.RESET)
export const successReset = () => action(LeadStatusTypes.SUCCESS_RESET) 
export const failureReset = () => action(LeadStatusTypes.FAILURE_RESET)