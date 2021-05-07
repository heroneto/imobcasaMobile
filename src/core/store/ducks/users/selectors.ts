import { ApplicationState } from '@core/store'
import { createSelector } from 'reselect'

import { UsersState } from './types'

const userListSelector = (state: UsersState) => state.data


export const activeUsersSelector = createSelector(
  userListSelector,
  users => users.filter(user => user.active)
)

export const inactiveUsersSelector = createSelector(
  userListSelector,
  users => users.filter(user => !user.active)
)

export const userStateSelector = (state: ApplicationState) => state.user

export const userOptionsSelector = createSelector(
  userStateSelector,
  usersState => usersState.data.map((user, idx) => {
    return {
      key: idx,
      label: user.fullName,
      id: user.id
    }
  })
)