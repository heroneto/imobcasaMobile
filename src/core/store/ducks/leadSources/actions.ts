import { action } from 'typesafe-actions';
import { LeadSource, LeadSourceTypes } from './types';

export const list = () => action(LeadSourceTypes.LIST)
export const successList = (data: LeadSource[]) => action(LeadSourceTypes.SUCCESS_LIST, {data})
export const failureList = (response: string) => action(LeadSourceTypes.FAILURE_LIST, {response})

export const reset = () => action(LeadSourceTypes.RESET)
export const successReset = () => action(LeadSourceTypes.SUCCESS_RESET) 
export const failureReset = () => action(LeadSourceTypes.FAILURE_RESET)