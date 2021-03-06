import instance from '../intance'
import { AxiosResponse } from 'axios'

interface activeFormService {
  (id: string, accessToken: string): Promise<AxiosResponse<Array<number>>>
}

export const activeForm : activeFormService = async (id: string, accessToken: string) => {
  return await instance.put('/forms/'+id+'/activate', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }) 
}