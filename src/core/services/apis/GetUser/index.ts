import instance from '../intance'



export const getUser = async (accessToken: string, id: string) => {
  return await instance.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}