import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { Auth } from '@core/store/ducks/auth/types';
import * as AuthActions from '@core/store/ducks/auth/actions';

import * as LoggedUserActions from '@core/store/ducks/loggedUser/actions'

import LoginView from '@lead-management/pages/Login'

interface StateProps {
  data: Auth,
  loading: boolean,
  error: boolean
}

interface DispatchProps {
  actions: {
    auth: {
      login(username: string, password: string): void,
      resetStore(): void,
      renew():void
    }
  }
}

type Props = StateProps & DispatchProps

class LoginContainer extends Component<Props> {
  componentDidMount() {
    const { renew } = this.props.actions.auth
    renew()
  }

  render() {
    const { actions, error, loading, data } = this.props
    return (
      <LoginView  
        actions={{
          login: actions.auth.login,
          resetStore: actions.auth.resetStore
        }}
        error={error}
        loading={loading}
        data={data}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  data: state.auth.data,
  error: state.auth.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      auth: bindActionCreators(AuthActions, dispatch),
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
