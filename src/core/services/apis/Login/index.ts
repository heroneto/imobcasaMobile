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

interface LoginService {
  (username: string, password: string): Promise<AxiosResponse<ReturnContract>>
}

export const login : LoginService = async (username: string, password: string) => {
  return await instance.post('/login', {
    username,
    password
  }) 
}