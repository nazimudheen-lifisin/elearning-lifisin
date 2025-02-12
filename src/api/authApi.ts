import { customAxios } from "../config/customAxios"
import type { User } from "../@types/auth"

export const loginApi = async (data: Record<keyof User, {password: string}>): Promise<User> => customAxios.post('/api/signin', { ...data, user_type: "mentor" })

export const signApi = async (data): Promise<{ message: string, status: number }> => customAxios.post('/api/signup/mentor/', data)

export const skillsApi = async () => customAxios.get('/api/skills')

export const languagesApi = async () => customAxios.get('/api/languages/')
