import { AxiosResponse } from 'axios'
import instance from '../intance'

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

interface GetNewTokenService {
  (refreshToken: string): Promise<AxiosResponse<ReturnContract>>
}


export const getNewAccessToken : GetNewTokenService = async (refreshToken: string) => {
  return await instance.post('/login/refresh', {
    refreshToken
  })
}