import instance from '../intance'


interface CreateUserProps {
  fullName: string,
  username: string,
  admin: boolean,
  email: string,
  active: boolean,
  password: string
}

export const createUser = async (data: CreateUserProps, accessToken: string) => {
  return await instance.post('/users', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}