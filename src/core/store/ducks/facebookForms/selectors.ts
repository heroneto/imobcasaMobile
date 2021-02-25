import { ApplicationState } from '@core/store'
import { createSelector } from 'reselect'

export const facebookFormStateSelector = (state: ApplicationState) => state.facebookForms