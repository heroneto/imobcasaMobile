import React, { useEffect } from 'react';

import TaskAddView from '@lead-management/pages/Task/Create'

import * as UserActions from '@core/store/ducks/users/actions'
import * as TaskTypesActions from '@core/store/ducks/taskTypes/actions'
import { useDispatch } from 'react-redux';


interface TaskAddProps {
  route: any
}

const TaskAddContainer: React.FC<TaskAddProps> = ({ route }) => {
  const dispatch = useDispatch()
  const { leadId } = route.params

  useEffect(() => {
    dispatch(UserActions.requestUserList())
    dispatch(TaskTypesActions.list())
  }, [])

  return <TaskAddView 
    leadId={leadId}
  />;
}

export default TaskAddContainer;