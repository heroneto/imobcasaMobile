import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import UserDetailsView from '@lead-management/pages/User/Read'
import { User } from '@core/store/ducks/users/types'
import * as UserActions from '@core/store/ducks/users/actions'
import { RouteProp } from '@react-navigation/native';

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
  route: RouteProp<UserDetailsScreenRouteProp, "User">,
  deleteUser(id: string): void
}

type Props = StateProps & DispatchProps 

class UserDetailsContainer extends React.Component<Props> {
  componentDidMount() {
    const { select, route } = this.props
    const { id } = route.params
    select(id)
  }
  render() {
    const {  selectedUser, loading, error, deleteUser, response} = this.props
    return (
      <UserDetailsView
        selectedUser={selectedUser}
        deleteUser={deleteUser}
        response={response}
        error={error}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  error: state.user.error,
  loading: state.user.loading,
  selectedUser: state.user.selectedUser,
  response: state.user.response
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsContainer);
