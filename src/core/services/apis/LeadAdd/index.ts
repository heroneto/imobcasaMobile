import instance from '../intance'
import { AxiosResponse } from 'axios'

interface ReturnContract {
  id: string,
  name: string,
  phone: string,
  sourceid: string,
  formid: string,
  userid: string,
  active: true,
  statusid: string,
  negociationStartedAt: Date,
  createdAt: Date,
  updatedAt: Date,
}


interface payloadContract {
  name: string,
  phone: string,
  sourceid: string,
  formid: string,
  userid: string,
  active: true,
  statusid: string,
  negociationStartedAt: Date,
}

interface LeadAddService {
  (accessToken: string, data: payloadContract): Promise<AxiosResponse<ReturnContract[]>>
}

export const leadAdd : LeadAddService = async (accessToken: string, data) => {
  return await instance.post('/leads', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
    
  }) 
}