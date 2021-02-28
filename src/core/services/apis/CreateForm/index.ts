import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract {
  id: string,
  fullName: string,
  email: string,
  admin: boolean,
  username: string,
  active: boolean,
  tokens: {
    accessToken: string,
    refreshToken: string
  }
}

interface IData {
  name: string,
  active: boolean,
  fbCreatedDate: Date,
  fbFormId: string
}


interface ICreateForm {
  (data: IData, accessToken: string): Promise<AxiosResponse<ReturnContract>>
}

export const createForm : ICreateForm = async (data: IData, accessToken: string) => {
  return await instance.post('/forms', data,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }) 
}