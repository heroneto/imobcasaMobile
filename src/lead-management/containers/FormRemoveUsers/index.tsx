import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import FormRemoveUsersView from '@lead-management/pages/Forms/RemoveUsers'
import * as FormsActions from '@core/store/ducks/forms/actions'
import { RouteProp } from '@react-navigation/core';
import { Form } from '@core/store/ducks/forms/types';

import * as UserFormActions from '@core/store/ducks/userForm/actions'
import { UserForm } from '@core/store/ducks/userForm/types'

interface StateProps {
  route: RouteProp<ScreenRouteProps, "FormAddUsers">,
  data: UserForm[],
  loading: boolean,
  error: boolean,
  response: string
}

type ScreenRouteProps = {
  FormAddUsers: { id: string }
}

interface DispatchProps {
  actions: {
    userForm: {
      requestList(formId: string): void,
      remove(formaId: string, userId: string): void,
      resetStore(): void
    }
  }
}

type Props = StateProps & DispatchProps & ScreenRouteProps

class FormRemoveUsersContainer extends React.Component<Props> {
  componentDidMount() {
    const { id } = this.props.route.params
    const { userForm } = this.props.actions
    userForm.requestList(id)

    
  }
  render() {
    const { data, actions, error, loading, response, route } = this.props
    const { id } = route.params

    return (
      <FormRemoveUsersView
        data={data}
        actions={actions.userForm}
        error={error}
        loading={loading}
        response={response}
        formId={id}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  data: state.userForm.data,
  loading: state.userForm.loading,
  error: state.userForm.error,
  response: state.userForm.response
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      userForm: bindActionCreators(UserFormActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRemoveUsersContainer);
