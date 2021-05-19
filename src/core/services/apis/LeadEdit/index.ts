import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract {
  id: string,
  name: string,
  phone: number,
  sourceid: string,
  formid: string,
  userid: string,
  active: boolean,
  statusid: string,
  negociationStartedAt: Date,
  negociationCompletedAt: Date | null,
  createdAt: Date,
  updatedAt: Date
}


interface payloadContract {
	id: string, 
	name: string, 
  phone: number, 
  sourceid: string, 
  formid: string,
  userid: string
}

interface LeadEditService {
  (accessToken: string, data: payloadContract): Promise<AxiosResponse<ReturnContract[]>>
}

export const leadEdit : LeadEditService = async (accessToken: string, data) => {
  return await instance.put('/leads', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }    
  }) 
}