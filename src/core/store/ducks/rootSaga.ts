import { all, call, takeLatest } from 'redux-saga/effects';

import { LoggedUserTypes } from './loggedUser/types'
import * as loggedUserActions from './loggedUser/sagas'

import { UsersTypes } from './users/types'
import * as UserSagas from './users/sagas'

import { AuthTypes } from './auth/types'
import * as AuthSagas from './auth/sagas'

import { FacebookFormsTypes } from './facebookForms/types'
import * as FacebookFormsSagas from './facebookForms/sagas'

import { FormsTypes } from './forms/types'
import * as FormsSagas from './forms/sagas'

import { UserFormTypes } from './userForm/types'
import * as UserFormSagas from './userForm/sagas'

import { LeadTypes } from './lead/types'
import * as LeadSagas from './lead/sagas'

import { LeadStatusTypes } from './leadStatus/types'
import * as LeadStatusSagas from './leadStatus/sagas'

import { LeadSourceTypes } from './leadSources/types'
import * as LeadSourceSagas from './leadSources/sagas'

import { LeadDetailsTypes } from './lead/leadDetails/types'
import * as LeadDetailsSagas from './lead/leadDetails/sagas'

import { TaskTypes } from './tasks/types'
import * as TaskSagas from './tasks/sagas'

import { TaskTypesTypes } from './taskTypes/types'
import * as TaskTypesSagas from './taskTypes/sagas'


export default function* rootSaga() : Generator {
  return yield all([
    takeLatest(LoggedUserTypes.GET, loggedUserActions.getUserStorage),
    takeLatest(LoggedUserTypes.EDIT, loggedUserActions.editUser),
    takeLatest(LoggedUserTypes.CHANGE_PASSWORD, loggedUserActions.changeMyPassword),
    takeLatest(UsersTypes.REQUEST_LIST, UserSagas.getUserList),
    takeLatest(UsersTypes.SELECT, UserSagas.selectUser),
    takeLatest(UsersTypes.EDIT, UserSagas.editUser),
    takeLatest(UsersTypes.RESET_PASSWORD, UserSagas.resetUserPassword),
    takeLatest(UsersTypes.CREATE, UserSagas.createUser),
    takeLatest(UsersTypes.DELETE, UserSagas.deleteUser),
    takeLatest(AuthTypes.LOGIN, AuthSagas.login),
    takeLatest(AuthTypes.LOGOUT, AuthSagas.logout),
    takeLatest(AuthTypes.RENEW, AuthSagas.renew),
    takeLatest(FacebookFormsTypes.LIST, FacebookFormsSagas.listForms),
    takeLatest(FacebookFormsTypes.LOAD_MORE, FacebookFormsSagas.listMoreForms),
    takeLatest(FormsTypes.CREATE, FormsSagas.createFormSagas),
    takeLatest(FormsTypes.GET, FormsSagas.getFormSaga),
    takeLatest(FormsTypes.REQUEST_LIST, FormsSagas.getFormListSaga),
    takeLatest(FormsTypes.ENABLE, FormsSagas.activeFormSaga),
    takeLatest(FormsTypes.DISABLE, FormsSagas.inactiveFormSaga),
    takeLatest(UserFormTypes.REQUEST_LIST, UserFormSagas.requestUsers),
    takeLatest(UserFormTypes.LIST_NOT_RELATED_USERS, UserFormSagas.requestUsersNotRelated),
    takeLatest(UserFormTypes.ADD, UserFormSagas.addUserForm),
    takeLatest(UserFormTypes.REMOVE, UserFormSagas.removeUserForm),
    takeLatest(LeadTypes.LIST, LeadSagas.getLeadListSagas),
    takeLatest(LeadTypes.ADD, LeadSagas.addLeadSagas),
    takeLatest(LeadStatusTypes.LIST, LeadStatusSagas.getLeadStatusListSagas),
    takeLatest(LeadSourceTypes.LIST, LeadSourceSagas.getLeadSourcesSagas),
    takeLatest(LeadDetailsTypes.GET, LeadDetailsSagas.getLeadDetailsRequest),
    takeLatest(LeadDetailsTypes.EDIT, LeadDetailsSagas.editLeadDetailsRequest),
    takeLatest(TaskTypes.ADD, TaskSagas.addTaskSagas),
    takeLatest(TaskTypes.GET, TaskSagas.getTaskSagas),
    takeLatest(TaskTypesTypes.LIST, TaskTypesSagas.getTaskTypesListSagas),
  ]);
}

