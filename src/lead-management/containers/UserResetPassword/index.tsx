import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import UserResetPasswordView from '@lead-management/pages/User/ResetPassword'
import * as UserActions from '@core/store/ducks/users/actions'

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
  error: state.user.error,
  loading: state.user.loading,
  id: state.user.selectedUser.id,
  response: state.user.response
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserResetPasswordContainer);
