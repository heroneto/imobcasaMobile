import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract{
  id: string,
  name: string,
  description: string,
  active: boolean,
  createdAt: Date,
  updatedAt: Date
}


interface TaskTypesListService {
  (accessToken: string): Promise<AxiosResponse<ReturnContract[]>>
}

export const getTaskTypesList : TaskTypesListService = async (accessToken: string) => {
  return await instance.get('/tasktypes', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
    
  }) 
}