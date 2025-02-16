import { AxiosResponse } from "axios"

import { customAxios } from "@/config/customAxios"
import { LoginData, MentorFields, User, ListResponse, UserFields } from "@/types/auth"



export const loginApi = async (data: LoginData) => {
    const response: AxiosResponse<User> = await customAxios.post('/api/signin', { ...data, user_type: "mentor" })
    return response
}

export const signApi = async (data: MentorFields & UserFields) => {
    const response: AxiosResponse<{ message: string }> = await customAxios.post('/api/signup/mentor/', data)
    return response.data;
}

export const skillsApi = async () => {
    const response: AxiosResponse<ListResponse> = await customAxios.get('/api/skills');
    return response;
}

export const languagesApi = async () => {
    const response = await customAxios.get('/api/languages/');
    return response;
}
