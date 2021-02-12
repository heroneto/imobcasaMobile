import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { Tokens } from '@core/store/ducks/tokens/types';
import * as TokenActions from '@core/store/ducks/tokens/actions';

import * as LoggedUserActions from '@core/store/ducks/loggedUser/actions'

import LoginView from '@lead-management/pages/Login'

interface StateProps {
  tokens: Tokens,
  loading: boolean,
  error: boolean
}

interface DispatchProps {
  actions: {
    tokenActions: {
      loadRequest(username: string, password: string): void,
      getTokensStorage(): void,
      refreshAccessToken(): void
    },
    loggedUserActions: {
      loadRequest(): void
    }
  }
}

type Props = StateProps & DispatchProps

class LoginContainer extends Component<Props> {
  componentDidMount() {
    const { refreshAccessToken } = this.props.actions.tokenActions
    refreshAccessToken()
  }

  render() {
    const { actions, tokens, error, loading } = this.props
    return (
      <LoginView  
        actions={{
          login: actions.tokenActions.loadRequest,
          getLoggedUser: actions.loggedUserActions.loadRequest
        }}
        error={error}
        loading={loading}
        tokens={tokens}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  tokens: state.tokens.data,
  loggedUser: state.loggedUser.data,
  error: state.tokens.error,
  loading: state.tokens.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      tokenActions: bindActionCreators(TokenActions, dispatch),
      loggedUserActions: bindActionCreators(LoggedUserActions, dispatch)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
