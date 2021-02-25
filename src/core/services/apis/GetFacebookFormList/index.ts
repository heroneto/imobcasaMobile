import { AxiosResponse } from 'axios'
import instance from '../intance'

interface ReturnContract {
  forms: Array<{
    id: string,
    locale: string,
    name: string,
    status: string,
  }>,
  after: string,
  next: string
}

interface GetList {
  (accessToken: string): Promise<AxiosResponse<ReturnContract>>
}


export const getFacebookFormList : GetList = async (accessToken: string, after = "") => {
  return await instance.get('/facebook/page/forms', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    params: {
      after
    }
  })
}

interface GetMoreService {
  (accessToken: string, after : string): Promise<AxiosResponse<ReturnContract>>
}

export const getMoreFacebookFormList : GetMoreService = async (accessToken: string, after: string) => {
  return await instance.get(`/facebook/page/forms?after=${after}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}
