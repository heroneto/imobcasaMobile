import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import UserDetailsView from '@lead-management/pages/User/Read'
import { SelectedUser } from '@core/store/ducks/selectedUser/types'
import * as SelectedUserActions from '@core/store/ducks/selectedUser/actions'

interface StateProps {
  selectedUser: SelectedUser,
  loading: boolean,
  error: boolean
}

interface DispatchProps {
  loadRequest(): void,
}

type Props = StateProps & DispatchProps

class UserDetailsContainer extends React.Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props
    loadRequest()
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
  error: state.selectedUser.error,
  loading: state.selectedUser.loading,
  selectedUser: state.selectedUser.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(SelectedUserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsContainer);
