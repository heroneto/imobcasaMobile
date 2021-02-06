import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Auth } from '@core/store/ducks/auth/types';
import { ApplicationState } from '@core/store';

import * as AuthActions from '@core/store/ducks/auth/actions';

import LoginView from '@lead-management/pages/Login'

interface StateProps {
  auth: Auth,
  loading: boolean,
  error: boolean
}

interface DispatchProps {
  loadRequest(username: string, password: string): void,
  getTokensStorage(): void,
  refreshAccessToken(): void
}

type Props = StateProps & DispatchProps

class LoginContainer extends Component<Props> {
  componentDidMount() {
    const { getTokensStorage, refreshAccessToken } = this.props
    getTokensStorage()
    refreshAccessToken()
  }

  render() {
    const { loadRequest, auth, error, loading, refreshAccessToken } = this.props
    return (
      <LoginView  
        actions={{
          login: loadRequest,
          refreshAccessToken: refreshAccessToken
        }}
        error={error}
        loading={loading}
        tokens={auth}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth.data,
  error: state.auth.error,
  loading: state.auth.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
