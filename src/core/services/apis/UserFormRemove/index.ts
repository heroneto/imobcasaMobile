import instance from '../intance'
import { AxiosResponse } from 'axios'

interface UserFormRemoveService {
  (userId: string, formId: string, accessToken: string): Promise<AxiosResponse<number>>
}

export const UserFormRemove : UserFormRemoveService = async (userId: string, formId: string, accessToken: string) => {
  return await instance.delete('/forms/'+formId+'/user/'+userId, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }) 
}