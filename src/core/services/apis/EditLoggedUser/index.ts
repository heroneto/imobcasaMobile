import instance from '../intance'


interface EditUserProps {
  id: string,
  fullName: string,
  username: string,
  admin: boolean,
  email: string,
  active: boolean
}

export const editLoggedUser = async (data: EditUserProps, accessToken: string) => {
  return await instance.put('/users', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}