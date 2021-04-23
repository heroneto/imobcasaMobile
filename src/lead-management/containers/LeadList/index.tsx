import React from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { LeadStatus } from '@core/store/ducks/leadStatus/types'
import * as LeadStatuActions from '@core/store/ducks/leadStatus/actions'

import LeadListView from '@lead-management/pages/Lead/List'

interface StateProps {
  data: LeadStatus[],
  loading: boolean,
  error: boolean,
  response: string
}

interface DispatchProps {
  list(): void
}

type Props = StateProps & DispatchProps

const LeadListContainer: React.FC<Props> = ({ data, loading, error, response, list }) => {



  React.useEffect(() => {
    list()
  }, [])



  return (
    <LeadListView
      data={data}
      loading={loading}
      error={error}
      response={response}
    />
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  error: state.leadStatus.error,
  loading: state.leadStatus.loading,
  response: state.leadStatus.response,
  data: state.leadStatus.data,

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(LeadStatuActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LeadListContainer);

