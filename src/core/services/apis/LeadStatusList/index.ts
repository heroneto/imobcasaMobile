import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract {
  id: string,
  name: string,
  description: string,
  order: number,
  createdAt: Date,
  updatedAt: Date
}

interface GetLeadStatusListService {
  (accessToken: string): Promise<AxiosResponse<ReturnContract[]>>
}

export const getLeadStatusList : GetLeadStatusListService = async (accessToken: string) => {
  return await instance.get('/leads/status/list', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
  }) 
}