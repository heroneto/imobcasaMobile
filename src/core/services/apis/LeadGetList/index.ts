import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract {
  id: string,
  name: string,
  phone: string,
  sourceid: string,
  formid: string,
  userid: string,
  active: true,
  statusid: string,
  negociationStartedAt: Date,
  negociationCompletedAt: Date | null,
  createdAt: Date,
  updatedAt: Date
}

interface GetLeadListService {
  (accessToken: string, skip: number, limit: number, statusId: string): Promise<AxiosResponse<ReturnContract[]>>
}

export const getLeadList : GetLeadListService = async (accessToken: string, skip: number, limit: number, statusId: string) => {
  return await instance.get('/leads', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    params: {
      skip,
      limit,
      statusId
    }
  }) 
}