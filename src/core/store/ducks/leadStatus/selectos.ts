import { createSelector } from 'reselect'

import { ApplicationState } from '../../index'

export const leadStatusState = (state: ApplicationState) => state.leadStatus


export const leadStatusOptions = createSelector(
  leadStatusState,
  leadStatus => leadStatus.data.map((leadStatus, idx) => {
    return {
      key: idx,
      label: leadStatus.name,
    }
  })
)