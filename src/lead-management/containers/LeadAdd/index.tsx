import React from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { LeadStatus } from '@core/store/ducks/leadStatus/types'
import * as LeadStatusActions from '@core/store/ducks/leadStatus/actions'
import * as LeadStatusSelectors from '@core/store/ducks/leadStatus/selectos'


import * as LeadSourcesActions from '@core/store/ducks/leadSources/actions'
import * as LeadSourcesSelectors from '@core/store/ducks/leadSources/selectors'


import * as UserActions from '@core/store/ducks/users/actions'
import * as UserSelectors from '@core/store/ducks/users/selectors'

import * as FormActions from '@core/store/ducks/forms/actions'
import * as FormSelectors from '@core/store/ducks/forms/selectors'

import LeadAddView from '@lead-management/pages/Lead/Create'

import { Lead, LeadState } from '@core/store/ducks/lead/types';
import * as LeadActions from '@core/store/ducks/lead/actions';


interface OptionsProps {
  key: number,
  label: string,
  id: string
}

interface StateProps {
  leadStatus: OptionsProps[],
  leadStatusLoading: boolean,
  leadStatusError: boolean, 
  leadSources: OptionsProps[],
  leadSourcesLoading: boolean,
  leadSourcesError: boolean,
  users: OptionsProps[],
  usersLoading: boolean,
  usersError: boolean,
  forms: OptionsProps[],
  formsLoading: boolean,
  formsError: boolean,
  leadState: LeadState
}

interface DispatchProps {
  actions: {
    leadStatus: {
      list(): void
    },
    lead: {
      add(data: Omit<Lead, 
        "id" | 
        "negociationCompletedAt" | 
        "createdAt" | 
        "updatedAt" | 
        "formData" | 
        "ownerData">
        ): void,
      reset(): void
    },
    leadSources: {
      list(): void
    },
    forms: {
      requestList(): void
    },
    users: {
      requestUserList(): void
    }
  }
}

type Props = StateProps & DispatchProps

const LeadAddContainer: React.FC<Props> = ({
  leadStatus,
  leadStatusLoading,
  leadStatusError,
  leadSources,
  leadSourcesLoading,
  leadSourcesError,
  users,
  usersLoading,
  usersError,
  forms,
  formsLoading,
  formsError,
  actions,
  leadState
   }) => {


  React.useEffect(() => {
    actions.leadStatus.list()
    actions.leadSources.list()
    actions.forms.requestList()
    actions.users.requestUserList()
  }, [])


  return (
    <LeadAddView
      leadStatus={leadStatus}
      leadStatusError={leadStatusError}
      leadStatusLoading={leadStatusLoading}
      forms={forms}
      formsLoading={formsLoading}
      formsError={formsError}
      leadSources={leadSources}
      leadSourcesError={leadSourcesError}
      leadSourcesLoading={leadSourcesLoading}
      users={users}
      usersError={usersError}
      usersLoading={usersLoading}
      actions={{
        lead: {
          add: actions.lead.add,
          reset: actions.lead.reset
        }
      }}
      leadActionResponse={leadState.response}
      leadError={leadState.error}
      leadLoading={leadState.loading}
    />
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  leadStatus: LeadStatusSelectors.leadStatusOptions(state),
  leadStatusLoading: state.leadStatus.loading,
  leadStatusError: state.leadStatus.error,
  leadSources: LeadSourcesSelectors.leadSourceOptionsSelector(state),
  leadSourcesLoading:  state.leadSources.loading,
  leadSourcesError:  state.leadSources.error,
  users:  UserSelectors.userOptionsSelector(state),
  usersLoading:  state.user.loading,
  usersError:  state.user.error,
  forms:  FormSelectors.formsOptions(state),
  formsLoading:  state.forms.loading,
  formsError:  state.forms.error,
  leadState: state.lead

});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      leadStatus: bindActionCreators(LeadStatusActions, dispatch),
      lead: bindActionCreators(LeadActions, dispatch),
      users: bindActionCreators(UserActions, dispatch),
      leadSources: bindActionCreators(LeadSourcesActions, dispatch),
      forms: bindActionCreators(FormActions, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadAddContainer);

