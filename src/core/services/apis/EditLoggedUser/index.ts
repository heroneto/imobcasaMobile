import { AxiosResponse } from 'axios'
import instance from '../intance'



interface ReturnContract {
  id: string,
  fullName: string,
  email: string,
  admin: boolean,
  username: string,
  active: boolean,
  createdAt: Date,
  updatedAt: Date,
  password: string,
}

interface EditLoggedUserService {
  (data: EditUserProps, accessToken: string): Promise<AxiosResponse<ReturnContract>>
}



interface EditUserProps {
  id: string,
  fullName: string,
  username: string,
  admin: boolean,
  email: string,
  active: boolean
}

export const editLoggedUser : EditLoggedUserService = async (data: EditUserProps, accessToken: string) => {
  return await instance.put('/users', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}