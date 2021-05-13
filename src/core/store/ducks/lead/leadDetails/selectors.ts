import { ApplicationState } from '@core/store'
import { createSelector } from 'reselect'
import { LeadDetails } from './types'

export const leadDetailsState = (state: ApplicationState) => state.leadDetails


export const selectActiveLeadTask = createSelector(
  [leadDetailsState],
  leadDetails => {
    return leadDetails.data?.tasks.find(task => task.active)
  }
)