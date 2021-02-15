import storage from '../instance'

const KEY = 'selectedUser'


export const getSelectedUser = async () => {
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
    active: boolean,
    createdAt: Date,
    updatedAt: Date
}

export const setSelectedUser = async (user: UserProps) => {
    try {
        const data = JSON.stringify(user)
        return await storage.setItem(KEY, data)
    } catch (error) {
        console.log(error)   
    }    
}

