import instance from '../intance'



export const getNewAccessToken = async (refreshToken: string) => {
  return await instance.post('/login/refresh', {
    refreshToken
  })
}