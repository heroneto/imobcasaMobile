import instance from '../intance'



export const login = async (username: string, password: string) => {
  return await instance.post('/login', {
    username,
    password
  })
}