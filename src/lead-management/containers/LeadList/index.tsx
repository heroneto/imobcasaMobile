import React from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { LeadStatus } from '@core/store/ducks/leadStatus/types'
import * as LeadStatusActions from '@core/store/ducks/leadStatus/actions'



import LeadListView from '@lead-management/pages/Lead/List'
import { Lead } from '@core/store/ducks/lead/types';
import * as LeadActions from '@core/store/ducks/lead/actions';

interface StateProps {
  leadStatus: LeadStatus[],
  loading: boolean,
  error: boolean,
  response: string,
  leads: Lead[],
  leadsLoading: boolean,
  leadsError: boolean
}

interface DispatchProps {
  actions: {
    leadStatus: {
      list(): void
    },
    lead: {
      list(): void
    }
  }
}

type Props = StateProps & DispatchProps

const LeadListContainer: React.FC<Props> = ({
  leadStatus,
  loading,
  error,
  response,
  actions,
  leads,
  leadsLoading,
  leadsError }) => {


  React.useEffect(() => {
    actions.leadStatus.list()
    actions.lead.list()
  }, [])


  return (
    <LeadListView
      leadStatus={leadStatus}
      loading={loading}
      error={error}
      response={response}
      leads={leads}
      leadsLoading={leadsLoading}
      leadsError={leadsError}
    />
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  error: state.leadStatus.error,
  loading: state.leadStatus.loading,
  response: state.leadStatus.response,
  leadStatus: state.leadStatus.data,
  leads: state.lead.data,
  leadsLoading: state.lead.loading,
  leadsError: state.lead.error
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      leadStatus: bindActionCreators(LeadStatusActions, dispatch),
      lead: bindActionCreators(LeadActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadListContainer);

