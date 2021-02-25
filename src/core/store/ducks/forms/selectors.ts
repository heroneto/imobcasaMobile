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