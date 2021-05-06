import React from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { LeadStatus } from '@core/store/ducks/leadStatus/types'
import * as LeadStatusActions from '@core/store/ducks/leadStatus/actions'
import * as LeadStatusSelectors from '@core/store/ducks/leadStatus/selectos'


import * as LeadSourcesActions from '@core/store/ducks/leadSources/actions'
import * as UserActions from '@core/store/ducks/users/actions'
import * as FormActions from '@core/store/ducks/forms/actions'
import LeadAddView from '@lead-management/pages/Lead/Create'

import { Lead } from '@core/store/ducks/lead/types';
import * as LeadActions from '@core/store/ducks/lead/actions';
import { User } from '@core/store/ducks/users/types';
import { LeadSource } from '@core/store/ducks/leadSources/types';
import { Form } from '@core/store/ducks/forms/types';


interface OptionsProps {
  key: number,
  label: string,
}

interface StateProps {
  leadStatus: OptionsProps[],
  leadStatusLoading: boolean,
  leadStatusError: boolean, 
  leadSources: LeadSource[],
  leadSourcesLoading: boolean,
  leadSourcesError: boolean,
  users: User[],
  usersLoading: boolean,
  usersError: boolean,
  forms: Form[],
  formsLoading: boolean,
  formsError: boolean,
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
        ): void
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
  actions
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
    />
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  leadStatus: LeadStatusSelectors.leadStatusOptions(state),
  leadStatusLoading: state.leadStatus.loading,
  leadStatusError: state.leadStatus.error,
  leadSources:  state.leadSources.data,
  leadSourcesLoading:  state.leadSources.loading,
  leadSourcesError:  state.leadSources.error,
  users:  state.user.data,
  usersLoading:  state.user.loading,
  usersError:  state.user.error,
  forms:  state.forms.data,
  formsLoading:  state.forms.loading,
  formsError:  state.forms.error,
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

