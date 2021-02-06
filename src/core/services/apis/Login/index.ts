import instance from '../intance'



export const login = async (username: string, password: string) => {
  const result =  await instance.post('/login', {
    username,
    password
  })

  return result
}