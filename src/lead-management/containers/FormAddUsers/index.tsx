import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import FormAddUsersView from '@lead-management/pages/Forms/AddUsers'
import { User } from '@core/store/ducks/userForm/types';
import * as ListUserActions from '@core/store/ducks/users/actions';
import * as FormsActions from '@core/store/ducks/forms/actions'
import * as UsersFormsActions from '@core/store/ducks/userForm/actions'
import { RouteProp } from '@react-navigation/core';
import { Form } from '@core/store/ducks/forms/types';


interface StateProps {
  route: RouteProp<ScreenRouteProps, "FormAddUsers">,
  forms: {
    loading: boolean,
    error: boolean,
    response: string,
    form: Form | null
  },
  usersForms: {
    loading: boolean,
    error: boolean,
    response: string,
    usersNotRelated: User[]
  }
}

type ScreenRouteProps = {
  FormAddUsers: { id: string }
}

interface DispatchProps {
  actions: {
    forms: {
      addUser(formId: string, userId: string): void
      get(id: string): void
    },
    usersForms: {
      listNotRelatedUsers(formId: string): void,
      add(formId: string, userId: string): void,
      resetStore(): void
    }
  }
}

type Props = StateProps & DispatchProps & ScreenRouteProps

class FormAddUsers extends React.Component<Props> {
  componentDidMount() {
    const { id } = this.props.route.params
    const { forms, usersForms } = this.props.actions
    usersForms.listNotRelatedUsers(id)
    forms.get(id)  
  }

  render() {
    const { forms, actions, usersForms } = this.props
    return (
      <FormAddUsersView
        users={usersForms.usersNotRelated}
        usersResponse={usersForms.response}
        usersLoading={usersForms.loading}
        usersError={usersForms.error}
        form={forms.form}
        actions={{
          addUser: actions.usersForms.add,
          resetStore: actions.usersForms.resetStore,
          listNotRelatedUsers: actions.usersForms.listNotRelatedUsers
        }}
        formsLoading={forms.loading}
        formsError={forms.error}
        formsResponse={forms.response}

      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  forms: {
    loading: state.forms.loading,
    error: state.forms.error,
    response: state.forms.response,
    form: state.forms.form
  },
  usersForms: {
    loading: state.userForm.loading,
    error: state.userForm.error,
    usersNotRelated: state.userForm.usersNotRelated,
    response: state.userForm.response
  }
  
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      forms: bindActionCreators(FormsActions, dispatch),
      usersForms: bindActionCreators(UsersFormsActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddUsers);
