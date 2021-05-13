import instance from '../intance'
import { AxiosResponse } from 'axios'

interface Task {
  active: boolean,
  createdAt: Date,
  description: string,
  id: string,
  leadid: string,
  ownerData: {
    fullName: string,
    username: string
  },
  resolutiondate: Date | null,
  startdate: Date,
  tasktypeid: string,
  title: string,
  updatedAt: Date,
  userid: string,
  taskTypeData: {
    name: string,
    description: string
  }
}

interface ReturnContract {
  id: string,
  name: string,
  phone: string,
  sourceid: string,
  formid: string,
  userid: string,
  active: boolean,
  statusid: string,
  negociationStartedAt: Date,
  negociationCompletedAt: Date | null,
  createdAt: Date,
  updatedAt: Date,
  ownerData: {
    fullName: string,
    username: string,
  },
  formData: {
    name: string
  },
  sourceData: {
    name: string
  },
  statusData: {
    name: string
  },
  tasks: Array<Task> 

}

interface GetLeadDetailsService {
  (accessToken: string, id: string): Promise<AxiosResponse<ReturnContract>>
}

export const getLeadDetails : GetLeadDetailsService = async (accessToken: string, id: string) => {
  return await instance.get(`/leads/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }) 
}