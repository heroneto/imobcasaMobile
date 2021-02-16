import instance from '../intance'


export const resetUserPassword = async (password: string, id: string, accessToken: string) => {
  return await instance.put(`/users/${id}/password/reset`, {
    password
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}