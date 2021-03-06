import { createSelector } from 'reselect'

import { ApplicationState } from '@core/store'

export const formStateSelector = (state: ApplicationState) => state.forms

export const activeForms = createSelector(
  formStateSelector,
  forms => forms.data.filter(form => form.active)
)

export const inactiveForms = createSelector(
  formStateSelector,
  forms => forms.data.filter(form => !form.active)
)