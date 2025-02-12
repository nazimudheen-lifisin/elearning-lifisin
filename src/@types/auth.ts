
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

export type { User }