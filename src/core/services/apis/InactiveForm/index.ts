import instance from '../intance'
import { AxiosResponse } from 'axios'

interface inactiveFormService {
  (id: string, accessToken: string): Promise<AxiosResponse<Array<number>>>
}

export const inactiveForm : inactiveFormService = async (id: string, accessToken: string) => {
  return await instance.put('/forms/'+id+'/inactivate', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }) 
}