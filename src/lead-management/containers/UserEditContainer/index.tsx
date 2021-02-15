import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import UserEditView from '@lead-management/pages/User/Edit'
import { SelectedUser } from '@core/store/ducks/selectedUser/types'
import * as SelectedUserActions from '@core/store/ducks/selectedUser/actions'

interface StateProps {
  selectedUser: SelectedUser,
  loading: boolean,
  error: boolean,
  response: string,
}

interface DispatchProps {
  loadRequest(): void,
  loadEditUser(data: Omit<SelectedUser, "createdAt" | "updatedAt" >): void
}

type Props = StateProps & DispatchProps

class UserEditContainer extends React.Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props
    loadRequest()
  }
  render() {
    const {  selectedUser, loading, error, loadEditUser, response } = this.props
    return (
      <UserEditView
        selectedUser={selectedUser}
        error={error}
        loading={loading}
        loadEditUser={loadEditUser}
        response={response}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  error: state.selectedUser.error,
  loading: state.selectedUser.loading,
  selectedUser: state.selectedUser.data,
  response: state.selectedUser.response
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(SelectedUserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserEditContainer);
