import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { LoggedUser } from '@core/store/ducks/loggedUser/types';
import * as LoggedUserActions from '@core/store/ducks/loggedUser/actions';

import MyPasswordEdit from '@lead-management/pages/MyPasswordEdit'

interface StateProps {
  data: LoggedUser
  loading: boolean,
  error: boolean,
  response: string
}

interface DispatchProps {
  actions: {
    loadChangePassword(password: string, newPassword: string): void,
  }
}

type Props = StateProps & DispatchProps

class MyPasswordEditContainer extends Component<Props> {

  render() {
    const { actions, error, loading, response } = this.props
    return (
      <MyPasswordEdit  
        actions={{
          loadRequest: actions.loadChangePassword,
        }}
        error={error}
        loading={loading}
        response={response}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  data: state.loggedUser.data,
  error: state.loggedUser.error,
  loading: state.loggedUser.loading,
  response: state.loggedUser.response
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(LoggedUserActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPasswordEditContainer);
