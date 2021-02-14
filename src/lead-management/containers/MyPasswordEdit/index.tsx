import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { ChangeMyPassword } from '@core/store/ducks/changeMyPassword/types';
import * as ChangeMyPasswordActions from '@core/store/ducks/changeMyPassword/actions';

import MyPasswordEdit from '@lead-management/pages/MyPasswordEdit'

interface StateProps {
  data: ChangeMyPassword
  loading: boolean,
  error: boolean
}

interface DispatchProps {
  actions: {
    loadRequest(password: string, newPassword: string): void,
    loadResetStore():void
  }
}

type Props = StateProps & DispatchProps

class MyPasswordEditContainer extends Component<Props> {

  render() {
    const { actions, error, loading, data } = this.props
    return (
      <MyPasswordEdit  
        actions={{
          loadRequest: actions.loadRequest,
          loadResetStore: actions.loadResetStore
        }}
        error={error}
        loading={loading}
        response={data.response}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  data: state.changeMyPassword.data,
  error: state.changeMyPassword.error,
  loading: state.changeMyPassword.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(ChangeMyPasswordActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPasswordEditContainer);
