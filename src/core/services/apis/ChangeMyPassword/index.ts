import { AxiosResponse } from 'axios'
import instance from '../intance'

interface ChangePasswordService {
  (data: ChangeMyPaswordProps, accessToken: string): Promise<AxiosResponse<string | null>>
}

interface ChangeMyPaswordProps {
  password: string,
  newPassword: string
}

export const changeMyPassword : ChangePasswordService = async (data: ChangeMyPaswordProps, accessToken: string) => {
  return await instance.put('/me/password', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}