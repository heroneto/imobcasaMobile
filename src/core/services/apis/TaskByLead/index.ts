      // id: expect.any(String),
      // title: expect.any(String),
      // description: expect.any(String),
      // userid: expect.any(String),
      // leadid: expect.any(String),
      // active: expect.any(Boolean),
      // startdate: expect.any(Date),
      // tasktypeid: expect.any(String),
      // updatedAt: expect.any(Date),
      // createdAt: expect.any(Date)

      import instance from '../intance'
      import { AxiosResponse } from 'axios'
      
      interface ReturnContract {
        id: string,
        title: string,
        description: string,
        userid: string,
        leadid: string,
        active: boolean,
        startdate: Date,
        tasktypeid: string,
        updatedAt: Date,
        createdAt: Date,
      }
      
      interface GetTasksByLeadService {
        (accessToken: string, leadId: string): Promise<AxiosResponse<ReturnContract>>
      }
      
      export const getTasksByLead : GetTasksByLeadService = async (accessToken: string, leadId: string) => {
        return await instance.get(`/tasks/leads/${leadId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }) 
      }