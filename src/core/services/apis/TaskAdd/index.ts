import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract{
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


interface payloadContract {
  title: string, 
  description: string, 
  userid: string, 
  leadid: string, 
  active: boolean, 
  startdate: Date, 
  tasktypeid: string, 
}

interface TaskAddService {
  (accessToken: string, data: payloadContract): Promise<AxiosResponse<ReturnContract>>
}

export const addTask : TaskAddService = async (accessToken: string, data) => {
  return await instance.post('/tasks', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
    
  }) 
}