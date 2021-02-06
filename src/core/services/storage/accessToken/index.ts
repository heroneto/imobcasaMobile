import storage from '../instance'

const KEY = 'acessToken'


export const getAccessToken = async () => {
    try{
        return await storage.getItem(KEY)
    }catch(error){
        console.log(error)   
    }
}


export const setAccessToken = async (token: string) => {
    try {
        return await storage.setItem(KEY, token)    
    } catch (error) {
        console.log(error)   
    }    
}

