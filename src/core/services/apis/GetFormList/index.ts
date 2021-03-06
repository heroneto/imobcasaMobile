import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract {
  id: string,
  name: string,
  active: boolean,
  fbCreatedDate: Date,
  fbFormId: string,
  createdAt: Date,
  updatedAt: Date
}

interface GetFormListService {
  (accessToken: string): Promise<AxiosResponse<ReturnContract[]>>
}

export const getFormList : GetFormListService = async (accessToken: string) => {
  return await instance.get('/forms', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }) 
}