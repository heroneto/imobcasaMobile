import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import LeadReadView from '@lead-management/pages/Lead/Read'

import { LeadDetails, LeadDetailsState } from '@core/store/ducks/lead/leadDetails/types';
import * as LeadDetailsActions from '@core/store/ducks/lead/leadDetails/actions';


interface StateProps {
  data: LeadDetails | null,
  loading: boolean,
  error: boolean,
  route: any
}

interface DispatchProps {
  getLeadDetails(id: string): void
}

type Props = StateProps & DispatchProps

const LeadDetailsContainer: React.FC<Props> = ({
  getLeadDetails,
  data,
  loading,
  error,
  route
   }) => {




  React.useEffect(() => {
    const { leadid } = route.params
    if(leadid){
      getLeadDetails(leadid)
    }
  }, [])


  return (
    <LeadReadView
      data={data}
      loading={loading}
      error={error}
      id={route?.params?.leadid}
      getLeadDetails={getLeadDetails}
    />
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  data: state.leadDetails.data,
  loading: state.leadDetails.loading,
  error: state.leadDetails.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(LeadDetailsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LeadDetailsContainer);

