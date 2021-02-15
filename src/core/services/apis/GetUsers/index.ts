import instance from '../intance'



export const getUsers = async (accessToken: string) => {
  return await instance.get('/users', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}