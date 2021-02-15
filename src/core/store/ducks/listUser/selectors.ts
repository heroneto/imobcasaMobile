import { createSelector } from 'reselect'

import { ListUserState } from './types'

const userListSelector = (state: ListUserState) => state.data


export const activeUsersSelector = createSelector(
  userListSelector,
  users => users.filter(user => user.active)
)

export const inactiveUsersSelector = createSelector(
  userListSelector,
  users => users.filter(user => !user.active)
)