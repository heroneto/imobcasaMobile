import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import UserEditView from '@lead-management/pages/User/Edit'
import { User } from '@core/store/ducks/users/types'
import * as UserActions from '@core/store/ducks/users/actions'

interface StateProps {
  selectedUser: User,
  loading: boolean,
  error: boolean,
  response: string,
}

interface DispatchProps {
  edit(data: Omit<User, "createdAt" | "updatedAt" >): void
}

type Props = StateProps & DispatchProps

class UserEditContainer extends React.Component<Props> {
  componentDidMount() {

  }
  render() {
    const {  selectedUser, loading, error, edit, response } = this.props
    return (
      <UserEditView
        selectedUser={selectedUser}
        error={error}
        loading={loading}
        edit={edit}
        response={response}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserEditContainer);
