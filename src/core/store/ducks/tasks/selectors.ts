import { ApplicationState } from '@core/store'
import { Lead } from './types'

export const leadState = (state: ApplicationState) => state.lead

export const leadByState = (leads: Lead[], statusId: string) => leads.filter(lead => lead.statusid === statusId)