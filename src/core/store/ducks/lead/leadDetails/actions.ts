import { action } from 'typesafe-actions';
import { LeadDetails, LeadDetailsTypes } from './types';

export const getLeadDetails = (id: string) => action(LeadDetailsTypes.GET, {id})
export const successGetLeadDetails = (data: LeadDetails) => action(LeadDetailsTypes.SUCCESS_GET, {data})
export const failureGetLeadDetails = (response: string) => action(LeadDetailsTypes.FAILURE_GET, {response})

export const resetStore = () => action(LeadDetailsTypes.RESET_STORE)
export const successResetStore = () => action(LeadDetailsTypes.SUCCESS_RESET_STORE)
export const failureResetStore = () => action(LeadDetailsTypes.FAILURE_RESET_STORE)

