import { createSelector } from 'reselect'

import { ApplicationState } from '@core/store'

export const formStateSelector = (state: ApplicationState) => state.forms

