import AsyncStorage from '@react-native-async-storage/async-storage'

const ACCESS_TOKEN_KEY = "@access_token"


export const login = async () => {
  try{
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, "token")
    return true
  }catch(e){
    console.error(e)
  }
}

export const logout = async () => {
  try{
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY)
    return true
  }catch(e){
    console.error(e)
  }
}

export const isLogin = async () => {
  try{
    const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY)
    if(token){
      return true
    }
    return false
  }catch(e) {
    console.error(e)
  }
}