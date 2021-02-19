import storage from '../instance'

const KEY = 'user'


export const getUser = async () => {
    try{
        return await storage.getItem(KEY)
    }catch(error){
        console.log(error)   
    }
}



interface UserProps {
    fullName: string,
    username: string,
    admin: boolean,
    id: string,
    email: string,
    isLogged: boolean,
    active: boolean
}

export const setUser = async (user: UserProps) => {
    try {
        const data = JSON.stringify(user)
        return await storage.setItem(KEY, data)
    } catch (error) {
        console.log(error)   
    }    
}

export const clearUser = async () => {
    try {
        return await storage.setItem(KEY, "")
    } catch (error) {
        console.log(error)   
    } 
}