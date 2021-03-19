import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract {
  enabled: true,
  id: string,
  formid: string,
  userid: string,
  updatedAt: Date,
  createdAt: Date,
  lastLeadReceivedTime: Date
}

interface UserFormAddService {
  (userId: string, formId: string, accessToken: string): Promise<AxiosResponse<ReturnContract>>
}

export const UserFormAdd : UserFormAddService = async (userId: string, formId: string, accessToken: string) => {
  return await instance.post('/forms/'+formId+'/user/'+userId, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }) 
}