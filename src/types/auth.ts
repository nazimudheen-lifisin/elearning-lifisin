
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
            "profile_picture": string
        },
        "linkedin_profile": string,
        "experience_in_years": number,
        "cover_story": string,
        "availability": string
    }
}


interface ListResponse {
    _id: string,
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
    cirtifications: {
        cirt_name: string,
        cirt_org: string,
        cirt_id: string,
        cirt_file: string
    }[];
    linkedin_profile: string;
    experience_in_years: string;
    skills: ListResponse[];
    languages: ListResponse[];
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


export type { User, ListResponse, MentorFields, UserFields, LoginData }