import { ApplicationState } from '@core/store'
import { createSelector } from 'reselect'

export const taskTypesState = (state: ApplicationState) => state.taskTypes


export const selectTaskTypesOptions = createSelector(
  [taskTypesState],
  taskTypes => taskTypes.data.map((taskType, idx) => {
    return {
      key: idx,
      label: taskType.name,
      id: taskType.id
    }
  })
)