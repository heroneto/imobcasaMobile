import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@core/store';

import { User } from '@core/store/ducks/users/types';
import * as UserActions from '@core/store/ducks/users/actions';
import * as UserSelectors from '@core/store/ducks/users/selectors'

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
  activeUsers: UserSelectors.activeUsersSelector(state.user),
  inactiveUsers: UserSelectors.inactiveUsersSelector(state.user),
  error: state.user.error,
  loading: state.user.loading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserListsContainer);
