import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract {
  id: string,
  formid: string,
  userid: string,
  lastLeadReceivedTime: Date,
  score: number | null,
  enabled: number,
  createdAt: Date,
  updatedAt: Date,
  userData: {
    username: string,
    fullName: string
  }
}

interface UserFormGetUsersService {
  (formId: string, accessToken: string): Promise<AxiosResponse<ReturnContract[]>>
}

export const userFormGetUsersRelated: UserFormGetUsersService = async (formId: string, accessToken: string) => {
  return await instance.get('/forms/' + formId + '/users', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    params: {
      related: "TRUE"
    }
  })
}



interface NotRelatedReturnContract {
  id: string,
  fullName: string,
  username: string,
  email: string,
  admin: boolean,
  active: boolean,
  createdAt: Date,
  updatedAt: Date
}
interface UserFormGetUsersNotRelatedService {
  (formId: string, accessToken: string): Promise<AxiosResponse<NotRelatedReturnContract[]>>
}

export const userFormGetUsersNotRelated: UserFormGetUsersNotRelatedService = async (formId: string, accessToken: string) => {
  return await instance.get('/forms/' + formId + '/users', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    params: {
      related: "FALSE"
    }
  })
}