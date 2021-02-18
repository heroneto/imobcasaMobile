import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import UserCreateView from '@lead-management/pages/User/Create'
import { CreateUserProps, User } from '@core/store/ducks/users/types'
import * as listUserActions from '@core/store/ducks/users/actions'

interface StateProps {
  selectedUser: User,
  loading: boolean,
  error: boolean,
  response: string,
}

interface DispatchProps {
  create(data: CreateUserProps): void
}

type Props = StateProps & DispatchProps

class UserCreateContainer extends React.Component<Props> {
  componentDidMount() {

  }
  render() {
    const { error, loading, create, response, selectedUser } = this.props
    return (
      <UserCreateView
        selectedUser={selectedUser}
        error={error}
        loading={loading}
        create={create}
        response={response}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  error: state.listUser.error,
  loading: state.listUser.loading,
  response: state.listUser.response,
  selectedUser: state.listUser.selectedUser
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(listUserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserCreateContainer);
