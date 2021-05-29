import instance from '../intance'
import { AxiosResponse } from 'axios'

export interface ReturnContract {
  id: string,
  title: string,
  description: string,
  userid: string,
  leadid: string,
  active: boolean,
  startdate: Date,
  tasktypeid: string,
  updatedAt: Date,
  createdAt: Date
}


interface TaskDetailsService {
  (accessToken: string, taskId: string): Promise<AxiosResponse<ReturnContract>>
}

export const getTask : TaskDetailsService = async (accessToken: string, taskId) => {
  return await instance.get(`/tasks/${taskId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
    
  }) 
}