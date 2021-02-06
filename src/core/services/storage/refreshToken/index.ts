import storage from '../instance'

const KEY = 'refreshToken'


export const getRefreshToken = async () => {
    try{
        return await storage.getItem(KEY)
    }catch(error){
        console.log(error)   
    }
}


export const setRefreshToken = async (token: string) => {
    try {
        return await storage.setItem(KEY, token)    
    } catch (error) {
        console.log(error)   
    }    
}

