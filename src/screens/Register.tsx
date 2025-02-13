import student from '../assets/student.png.png'
import CommonInput from '../components/CommonInput'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useMemo, useState } from 'react'
import SelectComponent from '../components/SelectComponent'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { languagesApi, signApi, skillsApi } from '../api/authApi'
import { toast } from 'react-toastify'
import { customAxios } from '../config/customAxios'



const schema = (type: 'student' | 'mentor') => yup.object().shape({
    user: yup.object({
        username: yup.string().required('Username is required'),
        first_name: yup.string().required('First name is required'),
        last_name: yup.string().required('Last name is required'),
        email: yup.string().email('Value must be email').required('Email is required'),
        password: yup.string().required('Password is required'),
        password2: yup.string().required('Confirm password is required')
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
        gender: yup.object().required('Gender is required').typeError('Gender is required'),
        phone_number: yup.string().required('Phone number is required'),
        country: yup.string().default("india"),
    }),
    ...(type === 'mentor' && {
        education: yup.object({
            degree_type: yup.object().required('Eductation type is required'),
            field_of_study: yup.string().required('Field of study is required'),
            institution: yup.string().required('Institution is required'),
            year_of_study: yup.object().required('Year of study is required'),
        }),
        cirtifications: yup.object().nullable().default(null),
        linkedin_profile: yup.string().required('Linkedin profile is required'),
        experience_in_years: yup.string().required('Experience years is required'),
        skills: yup.array().required('Skills is required').typeError('Skills is required'),
        languages: yup.array().required('Languages is required').typeError('Languages is required'),
        availability: yup.object().required('Availability is required').typeError('Availability is required'),
        cover_story: yup.string().nullable().default("")
    })
})

type YearOption = {
    id: number;
    label: string;
    value: string;
}

const languages = [
    {
        "id": 1,
        "label": "English",
        "value": "en-US"
    },
    {
        "id": 2,
        "label": "Spanish",
        "value": "es-ES"
    }
]

const skills = [
    {
        "id": 1,
        "label": "Data Science",
        "value": "data-science"
    },
    {
        "id": 2,
        "label": "Web Development",
        "value": "web-development"
    }
]


const years: YearOption[] = [];

for (let year = 2024; year >= 2012; year--) {
    years.push({
        id: year,
        label: year.toString(),
        value: year.toString(),
    });
}

const availability = [
    {
        "id": 1,
        "label": "Flexible",
        "value": "flexible"
    },
    {
        "id": 2,
        "label": "Weekends",
        "value": "weekends"
    }
]

const genders = [
    {
        "id": 1,
        "label": "Male",
        "value": "male"
    },
    {
        "id": 2,
        "label": "Female",
        "value": "female"
    },
    {
        "id": 3,
        "label": "Other",
        "value": "other"
    }
]

const education = [
    {
        "id": 1,
        "label": "Bachelors Degree",
        "value": "bachelors"
    },
    {
        "id": 2,
        "label": "Masters Degree",
        "value": "masters"
    },
    {
        "id": 3,
        "label": "Doctoral Degree",
        "value": "doctoral"
    }
]

export default function Register() {

    const [activeTab, setActiveTab] = useState<"student" | "mentor">("mentor");
    const navigate = useNavigate();

    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema(activeTab))
    })


    const { data: skillData } = useQuery({
        queryKey: ['get-skills'],
        queryFn: async () => customAxios.get('/api/skills'),

    })

    const { data: languageData } = useQuery({
        queryKey: ['get-languages'],
        queryFn: languagesApi,
    })

    const { mutate } = useMutation({
        mutationFn: signApi,
        mutationKey: ['signin-api'],
        onSuccess() {
            toast.success("Register successfully")
            navigate('/login')
        },
        onError() {
            toast.error("Something went wrong")
        }
    })


    useEffect(() => {
        if (activeTab) {
            reset({
                user: {
                    username: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password2: '',
                    gender: '',
                    phone_number: '',
                    country: 'india',
                },
                ...(activeTab === 'mentor' && {
                    education: {
                        degree_type: '',
                        field_of_study: '',
                        institution: '',
                        year_of_study: '',
                    },
                    certifications: null,
                    linkedin_profile: '',
                    experience_in_years: '',
                    skills: [],
                    languages: [],
                    availability: {},
                    cover_story: '',
                })
            })
        }
    }, [activeTab]);


    useEffect(() => {
        reset({
            languages: [{
                "id": 1,
                "label": "English",
                "value": "EN"
            }]
        })
    }, [])


    const onSubmit = (data) => {

        const submitData = {
            ...data,
            user: {
                ...data.user,
                gender: data.user.gender.value,
                user_type: activeTab,
                experience_in_years: parseInt(data.user.experience_in_years)
            },
            education: [{
                ...data.education,
                year_of_study: data.education.year_of_study.value,
                degree_type: data.education.degree_type.value
            }],
            availability: data.availability.value,
            skills: data?.skills?.map(item => item.id),
            languages: data?.languages?.map(item => item.id)
        }

        mutate(submitData);
        
    }



    return (
        <div className="h-screen flex overflow-hidden items-center justify-center">

            <div className="w-[80%] h-[80%] max-h-[80%] overflow-auto max-w-[1024px] shadow-2xl bg-[#fff] rounded-2xl py-4 px-8">
                <h1 className='mt-4 text-center'>Sign up</h1>
                <p className='mb-4 text-center'>Complete the Register form to create a new account.</p>

                <div className="w-full max-w-md mx-auto p-4">
                    <div className="flex bg-gray-200 rounded-lg p-1">
                        <button
                            className={`flex-1 py-2 text-center rounded-lg transition-all ${activeTab === "student" ? "bg-[#06BBCC] text-white" : "bg-transparent text-gray-700"
                                }`}
                            onClick={() => setActiveTab("student")}
                        >
                            Student
                        </button>
                        <button
                            className={`flex-1 py-2 text-center rounded-lg transition-all ${activeTab === "mentor" ? "bg-[#06BBCC] text-white" : "bg-transparent text-gray-700"
                                }`}
                            onClick={() => setActiveTab("mentor")}
                        >
                            Mentor
                        </button>
                    </div>

                </div>

                <span className='font-bold text-xl'>Personal details</span>
                <div className="w-full grid grid-cols-3 items-center gap-2">

                    <CommonInput
                        placeholder='First Name'
                        control={control}
                        name='user.first_name'
                        id='first_name'
                        key={'first_name'}
                    />

                    <CommonInput
                        placeholder='Last Name'
                        control={control}
                        name='user.last_name'
                        id='last_name'
                        key={'last_name'}
                    />

                    <CommonInput
                        placeholder='Username'
                        control={control}
                        name='user.username'
                        id='username'
                        key={'username'}
                    />

                    <CommonInput
                        placeholder='Email'
                        control={control}
                        name='user.email'
                        id='email'
                        key={'email'}
                    />

                    <CommonInput
                        placeholder='Password'
                        control={control}
                        name='user.password'
                        type='password'
                        id='password'
                        key={'password'}
                    />

                    <CommonInput
                        placeholder='Confirm Password'
                        control={control}
                        name='user.password2'
                        type='password'
                        id='password2'
                        key={'password2'}
                    />

                    <CommonInput
                        placeholder='Phone Number'
                        control={control}
                        name='user.phone_number'
                        id='phone_number'
                        key={'phone_number'}
                    />

                    <SelectComponent
                        name='user.gender'
                        options={genders}
                        control={control}
                        placeholder='Select gender...'
                    />
                </div>

                {
                    activeTab === 'mentor' && (
                        <>
                            <span className='font-bold text-xl'>Education details</span>
                            <div className="mt-2 w-full grid grid-cols-3 items-center gap-2 mb-6">

                                <SelectComponent
                                    name='education.degree_type'
                                    options={education}
                                    control={control}
                                    placeholder='Education type...'
                                />

                                <CommonInput
                                    placeholder='Field of study'
                                    control={control}
                                    name='education.field_of_study'
                                    id='field_of_study'
                                    key={'field_of_study'}
                                />

                                <CommonInput
                                    placeholder='Institution'
                                    control={control}
                                    name='education.institution'
                                    id='institution'
                                    key={'institution'}
                                />

                                <SelectComponent
                                    name='education.year_of_study'
                                    options={years || []}
                                    control={control}
                                    placeholder='Year of study...'
                                />


                                {/* <div className='w-[80%] bg-[#11BECE] mx-auto rounded-4xl mb-auto py-2 flex items-center justify-center'>
                        <p className='font-bold text-center uppercase m-0'>
                            Submit
                        </p>
                    </div> */}
                            </div>

                            <span className='font-bold text-xl'>Professional details</span>
                            <div className="mt-2 w-full grid grid-cols-3 items-center gap-2 mb-6">

                                {/* <CommonInput
                                    placeholder='Skills'
                                    control={control}
                                    name='name'
                                    id='name'
                                    key={'name'}
                                    icon={userIcon}
                                /> */}

                                <SelectComponent
                                    name='skills'
                                    options={skillData?.data?.map(item => ({ ...item, label: item?.name, value: item?.slug }))}
                                    multi
                                    control={control}
                                    placeholder='Select skills...'
                                />

                                {
                                    languageData?.data && (
                                        <SelectComponent
                                            name='languages'
                                            options={languageData?.data?.map(item => ({ ...item, label: item?.name, value: item?.code }))}
                                            control={control}
                                            multi
                                            placeholder='Select languages...'
                                            defaultValue={{ label: 'English', value: 'EN' }}
                                        />
                                    )
                                }

                                <CommonInput
                                    placeholder='Linkedin profile'
                                    control={control}
                                    name='linkedin_profile'
                                    id='linkedin_profile'
                                    key={'linkedin_profile'}
                                />

                                <CommonInput
                                    placeholder='Experience'
                                    control={control}
                                    name='experience_in_years'
                                    id='experience_in_years'
                                    type='number'
                                    key={'experience_in_years'}
                                />

                                <SelectComponent
                                    name='availability'
                                    options={availability}
                                    control={control}
                                    placeholder='Select available option...'
                                />

                                <CommonInput
                                    placeholder='Cover story (optional)'
                                    control={control}
                                    name='cover_story'
                                    id='cover_story'
                                    key={'cover_story'}
                                />
                            </div>
                        </>
                    )
                }

                <div onClick={handleSubmit(onSubmit)} className='lg:w-[50%] transition-transform mt-6 transform hover:scale-105 text-white bg-[#11BECE] mx-auto rounded-4xl mb-auto py-2 flex items-center justify-center'>
                    <p className='font-bold text-center uppercase m-0'>
                        Submit
                    </p>
                </div>

                <div className='mt-4 w-full  flex justify-center items-center'>
                    <p className='font-normal'>Already have an account </p>
                    &nbsp;
                    <Link to='/'>
                        <p className='font-semibold text-blue-400'>Sign in</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}