
interface User {
    "refresh": string,
    "access": string
    "user": {
        "user": {
            "username": string,
            "email": string,
            "phone_number": string,
            "address": string,
            "user_type": string,
            "country": string,
            "gender": string
        },
        "linkedin_profile": string,
        "experience_in_years": number,
        "cover_story": string,
        "availability": string
    }
}

type SkillsResponse = {
    name: string,
    slug: string,
    id: number
}[]

interface LanguageResponse {
    code: string,
    id: number,
    name: string
}

type SelectType = {
    label: string,
    value: string
}

type MentorFields = {
    education: {
        degree_type: SelectType;
        field_of_study: string;
        institution: string;
        year_of_study: SelectType;
    };
    cirtifications: object | null;
    linkedin_profile: string;
    experience_in_years: string;
    skills: Omit<SkillsResponse, "code" | "name"> & SelectType [];
    languages: Record<keyof SelectType, string> & { id: number}[];
    availability: SelectType;
    cover_story: string;
};

interface UserFields {
    user: {
        username: string,
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        password2?: string,
        gender: SelectType,
        phone_number: string,
        country: string,
    }
}

interface LoginData {
    username: string,
    password: string
}


export type { User, SkillsResponse, LanguageResponse, MentorFields, UserFields, LoginData }