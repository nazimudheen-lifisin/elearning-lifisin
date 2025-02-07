import { customAxios } from "../config/customAxios"

export const loginApi = async (data) => customAxios.post('/api/signin', { ...data, user_type: "mentor" })

export const signApi = async (data) => customAxios.post('/api/signup/mentor/', data)

export const skillsApi = async () => customAxios.get('/api/signup/mentor')

export const languagesApi = async () => customAxios.get('/api/languages/')
