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
    id: string,
    email: string,
    isLogged: boolean,
}

export const setUser = async (user: UserProps) => {
    try {
        const data = JSON.stringify(user)
        return await storage.setItem(KEY, data)
    } catch (error) {
        console.log(error)   
    }    
}

