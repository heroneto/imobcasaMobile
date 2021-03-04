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

interface GetFormService {
  (id: string, accessToken: string): Promise<AxiosResponse<ReturnContract>>
}

export const getForm : GetFormService = async (id: string, accessToken: string) => {
  return await instance.get('/forms/'+id, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }) 
}