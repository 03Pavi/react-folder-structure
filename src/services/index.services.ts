
import { axiosApi } from '@/config/axios'

const PATH = '/path'

export const createApi = (payload: any) =>
    axiosApi.post(PATH, payload)
