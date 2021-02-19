import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { LoggedUser } from '@core/store/ducks/loggedUser/types';
import * as LoggedUserActions from '@core/store/ducks/loggedUser/actions';

import MyUserEditView from '@lead-management/pages/MyUserEdit'

interface StateProps {
  loggedUser: LoggedUser,
  loading: boolean,
  error: boolean
}

interface DispatchProps {
  get(): void,
  edit(data: Omit<LoggedUser, 'isLogged'>): void,
}

type Props = StateProps & DispatchProps

class MyUserEditContainer extends Component<Props> {
  componentDidMount() {
    const { get } = this.props
    get()
  }

  render() {
    const { loggedUser, edit } = this.props
    return (
      <MyUserEditView loggedUser={loggedUser} actions={{loadEditUser: edit}} />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  loggedUser: state.loggedUser.data,
  error: state.loggedUser.error,
  loading: state.loggedUser.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(LoggedUserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MyUserEditContainer);
