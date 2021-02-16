import instance from '../intance'



export const deleteUser = async (accessToken: string, id: string) => {
  return await instance.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}