import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { User } from '@core/store/ducks/users/types';
import * as ListUserActions from '@core/store/ducks/users/actions';
import * as ListUserSelectors from '@core/store/ducks/users/selectors'

import UserListView from '@lead-management/pages/User/List'

interface StateProps {
  activeUsers?: User[],
  inactiveUsers?: User[],
  loading: boolean,
  error: boolean
}

interface DispatchProps {
  requestUserList(): void,
}

type Props = StateProps & DispatchProps

class UserListsContainer extends React.Component<Props> {
  componentDidMount() {
    const { requestUserList } = this.props
    requestUserList()
  }

  render() {
    const { activeUsers, inactiveUsers, error, loading } = this.props
    
    return (
      <UserListView 
        activeUsers={activeUsers || []}
        inactiveUsers={inactiveUsers || []}
        error={error}
        loading={loading}

      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  activeUsers: ListUserSelectors.activeUsersSelector(state.listUser),
  inactiveUsers: ListUserSelectors.inactiveUsersSelector(state.listUser),
  error: state.listUser.error,
  loading: state.listUser.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ListUserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserListsContainer);
