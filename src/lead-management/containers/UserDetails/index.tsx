import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import UserDetailsView from '@lead-management/pages/User/Read'
import { User } from '@core/store/ducks/listUser/types'
import * as listUserActions from '@core/store/ducks/listUser/actions'
import { RouteProp } from '@react-navigation/native';
import { StackParameters } from '../../../routes/StackNavigator'

interface StateProps {
  selectedUser: User,
  loading: boolean,
  error: boolean,
  response: string
}

type UserDetailsScreenRouteProp = {
  User: { id: string }
}

interface DispatchProps {
  select(id: string): void,
  route: RouteProp<UserDetailsScreenRouteProp, "User">
}

type Props = StateProps & DispatchProps 

class UserDetailsContainer extends React.Component<Props> {
  componentDidMount() {
    const { select, route } = this.props
    const { id } = route.params
    select(id)
  }
  render() {
    const {  selectedUser, loading, error } = this.props
    return (
      <UserDetailsView
        selectedUser={selectedUser}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  error: state.listUser.error,
  loading: state.listUser.loading,
  selectedUser: state.listUser.selectedUser,
  response: state.listUser.response
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(listUserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsContainer);
