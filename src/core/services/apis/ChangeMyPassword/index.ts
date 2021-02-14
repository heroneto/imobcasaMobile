import instance from '../intance'


interface ChangeMyPaswordProps {
  password: string,
  newPassword: string
}

export const changeMyPassword = async (data: ChangeMyPaswordProps, accessToken: string) => {
  return await instance.put('/me/password', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}