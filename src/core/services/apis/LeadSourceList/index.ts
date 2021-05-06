import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract {
  id: string,
  name: string,
  active: boolean,
  createdAt: Date,
  updatedAt: Date
}

interface GetLeadSourceListListService {
  (accessToken: string): Promise<AxiosResponse<ReturnContract[]>>
}

export const getLeadSourceList : GetLeadSourceListListService = async (accessToken: string) => {
  return await instance.get('/leads/sources/list', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
  }) 
}