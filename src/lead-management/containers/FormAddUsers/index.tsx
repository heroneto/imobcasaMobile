import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import FormAddUsersView from '@lead-management/pages/Forms/AddUsers'
import { User } from '@core/store/ducks/users/types';
import * as ListUserActions from '@core/store/ducks/users/actions';
import * as ListUserSelectors from '@core/store/ducks/users/selectors';
import * as FormsActions from '@core/store/ducks/forms/actions'
import { RouteProp } from '@react-navigation/core';
import { Form } from '@core/store/ducks/forms/types';


interface StateProps {
  route: RouteProp<ScreenRouteProps, "FormAddUsers">,
  listUser: {
    error: boolean,
    loading: boolean,
    activeUsers: User[] | [],
    response: string
  },
  forms: {
    loading: boolean,
    error: boolean,
    response: string,
    form: Form
  }
}

type ScreenRouteProps = {
  FormAddUsers: { id: string }
}

interface DispatchProps {
  actions: {
    listUser: {
      requestUserList(): void
    },
    forms: {
      addUser(formId: string, userId: string): void
      get(id: string): void
    }
  }
}

type Props = StateProps & DispatchProps & ScreenRouteProps

class FormAddUsers extends React.Component<Props> {
  componentDidMount() {
    const { id } = this.props.route.params
    const { listUser, forms } = this.props.actions
    listUser.requestUserList()
    forms.get(id)
    
  }
  render() {
    const { listUser, forms, actions } = this.props
    return (
      <FormAddUsersView
        users={listUser.activeUsers}
        form={forms.form}
        actions={{
          addUser: actions.forms.addUser
        }}
        formsLoading={forms.loading}
        formsError={forms.error}
        formsResponse={forms.response}
        usersResponse={listUser.response}
        usersLoading={listUser.loading}
        usersError={listUser.error}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  listUser: {
    error: state.listUser.error,
    loading: state.listUser.loading,
    activeUsers: ListUserSelectors.activeUsersSelector(state.listUser),
    response: state.listUser.response
  },
  forms: {
    loading: state.forms.loading,
    error: state.forms.error,
    response: state.forms.response,
    form: state.forms.form
  }  
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      listUser: bindActionCreators(ListUserActions, dispatch),
      forms: bindActionCreators(FormsActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddUsers);
