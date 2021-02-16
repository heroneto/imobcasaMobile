import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import UserResetPasswordView from '@lead-management/pages/User/ResetPassword'
import * as listUserActions from '@core/store/ducks/listUser/actions'

interface StateProps {
  id: string,
  loading: boolean,
  error: boolean,
  response: string,
}

interface DispatchProps {
  resetPassword(id:string, password:string): void
}

type Props = StateProps & DispatchProps

class UserResetPasswordContainer extends React.Component<Props> {
  componentDidMount() {

  }
  render() {
    const {  id, loading, error, resetPassword, response } = this.props
    return (
      <UserResetPasswordView
        id={id}
        error={error}
        loading={loading}
        resetPassword={resetPassword}
        response={response}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  error: state.listUser.error,
  loading: state.listUser.loading,
  id: state.listUser.selectedUser.id,
  response: state.listUser.response
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(listUserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserResetPasswordContainer);
