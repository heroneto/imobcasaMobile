import instance from '../intance'



export const getNewAccessToken = async (refreshToken: string) => {
  const result =  await instance.post('/login/refresh', {
    refreshToken
  })

  return result
}