import { createSelector } from 'reselect'

import { ApplicationState } from '@core/store'

export const leadSourceStateSelector = (state: ApplicationState) => state.leadSources

export const leadSourceOptionsSelector = createSelector(
  leadSourceStateSelector,
  leadSourceState => leadSourceState.data.map((leadSource, idx) => {
    return {
      key: idx,
      label: leadSource.name,
      id: leadSource.id
    }
  })
)