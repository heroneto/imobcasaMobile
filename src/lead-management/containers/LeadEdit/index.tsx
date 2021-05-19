import React, { useEffect } from 'react';
import { View } from 'react-native';

import LeadEditView from '@lead-management/pages/Lead/Edit'

import * as LeadDetailsActions from '@core/store/ducks/lead/leadDetails/actions'
import * as LeadSourceActions from '@core/store/ducks/leadSources/actions'
import * as FormsActions from '@core/store/ducks/forms/actions'
import * as UserActions from '@core/store/ducks/users/actions'
import { useDispatch } from 'react-redux';

interface StateProps {
  route: any
} 



const LeadEdit: React.FC<StateProps> = ({
  route
}) => {
  const { leadid } = route.params


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FormsActions.requestList())
    dispatch(LeadSourceActions.list())
    dispatch(LeadDetailsActions.getLeadDetails(leadid))
    dispatch(UserActions.requestUserList())
  })


  return <LeadEditView leadId={leadid} />;
}

export default LeadEdit;