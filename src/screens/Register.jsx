import student from '../assets/student.png.png'
import CommonInput from '../components/CommonInput'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback, useEffect, useState } from 'react'
import SelectComponent from '../components/SelectComponent'
import { Link } from 'react-router-dom'



const schema = (type) => yup.object({
    username: yup.string().required('Name is required'),
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().required('Email is required'),
    password1: yup.string().required('Password is required'),
    password2: yup.string().required('Confirm password is required'),
    gender: yup.object().required('Gender is required').typeError('Gender is required'),
    phone_number: yup.string().required('Phone number is required'),
    ...(type === 'mentor' && {
        education_type: yup.string().required('Eductation type is required'),
        field_of_study: yup.string().required('Field of study is required'),
        institution: yup.string().required('Institution is required'),
        year_of_study: yup.string().required('Year of study is required'),
        linkedin_profile: yup.string().required('Linkedin profile is required'),
        experience_in_years: yup.string().required('Experience years is required'),
        skills: yup.array().required('Skills is required').typeError('Skills is required'),
        languages: yup.array().required('Languages is required').typeError('Languages is required'),
        availability: yup.string().required('Availability is required'),
    })
})


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
        "label": "Transgender",
        "value": "transgender"
    }
]

export default function Register() {

    const [activeTab, setActiveTab] = useState("student");

    const { control, reset, handleSubmit } = useForm({
        resolver: yupResolver(schema(activeTab))
    })

    useEffect(() => {
        if (activeTab) {
            reset({
                username: '',
                availability: '',
                first_name: '',
                languages: [],
                education_type: '',
                email: '',
                experience_in_years: '',
                field_of_study: '',
                gender: '',
                institution: '',
                last_name: '',
                linkedin_profile: '',
                password1: '',
                password2: '',
                phone_number: '',
                skills: [],
                year_of_study: ''
            })
        }
    }, [activeTab]);


    useEffect(() => {
        reset({
            languages: [{
                "id": 1,
                "label": "English",
                "value": "en-US"
            }]
        })
    }, [])

    const userIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(6,187,204)" class="size-6">
        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
    </svg>


    const lockIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(6,187,204)" class="size-6">
        <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
    </svg>


    const gender = <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="4" stroke="#000" stroke-width="1" />
        <line x1="12" y1="12" x2="16" y2="16" stroke="#000" stroke-width="1" />
        <line x1="16" y1="12" x2="16" y2="16" stroke="#000" stroke-width="1" />
        <line x1="16" y1="12" x2="12" y2="12" stroke="#000" stroke-width="1" />

        <circle cx="15" cy="15" r="4" stroke="#000" stroke-width="1" />
        <line x1="15" y1="19" x2="15" y2="22" stroke="#000" stroke-width="1" />
        <line x1="13" y1="22" x2="17" y2="22" stroke="#000" stroke-width="1" />
    </svg>

    const phoneIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(6,187,204)" class="size-6">
        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
    </svg>



    const firstIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="4" />
            <rect x="8" y="12" width="8" height="8" />
        </svg>
    );

    const lastIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8" cy="10" r="3" />
            <line x1="14" y1="8" x2="18" y2="8" />
            <line x1="14" y1="12" x2="18" y2="12" />
        </svg>
    );


    const onSubmit = () => { }



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
                        placeholder='Username'
                        control={control}
                        name='username'
                        id='username'
                        key={'username'}
                        icon={userIcon}
                    />
                    <CommonInput
                        placeholder='First Name'
                        control={control}
                        name='first_name'
                        id='first_name'
                        key={'first_name'}
                        icon={firstIcon}
                    />

                    <CommonInput
                        placeholder='Last Name'
                        control={control}
                        name='last_name'
                        id='last_name'
                        key={'last_name'}
                        icon={lastIcon}
                    />

                    <CommonInput
                        placeholder='Email'
                        control={control}
                        name='email'
                        id='email'
                        key={'email'}
                        icon={lockIcon}
                    />

                    <CommonInput
                        placeholder='Password'
                        control={control}
                        name='password1'
                        id='password1'
                        key={'password1'}
                        icon={lockIcon}
                    />

                    <CommonInput
                        placeholder='Confirm Password'
                        control={control}
                        name='password2'
                        id='password2'
                        key={'password2'}
                        icon={lockIcon}
                    />

                    <CommonInput
                        placeholder='Phone Number'
                        control={control}
                        name='phone_number'
                        id='phone_number'
                        key={'phone_number'}
                        icon={phoneIcon}
                    />

                    <SelectComponent
                        name='gender'
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

                                <CommonInput
                                    placeholder='Education'
                                    control={control}
                                    name='education_type'
                                    id='education_type'
                                    key={'education_type'}
                                    icon={userIcon}
                                />
                                <CommonInput
                                    placeholder='Type'
                                    control={control}
                                    name='field_of_study'
                                    id='field_of_study'
                                    key={'field_of_study'}
                                    icon={lockIcon}
                                />

                                <CommonInput
                                    placeholder='Institution'
                                    control={control}
                                    name='institution'
                                    id='institution'
                                    key={'institution'}
                                    icon={userIcon}
                                />
                                <CommonInput
                                    placeholder='Year of study'
                                    control={control}
                                    name='year_of_study'
                                    id='year_of_study'
                                    key={'year_of_study'}
                                    icon={lockIcon}
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
                                    options={skills}
                                    multi
                                    control={control}
                                    placeholder='Select skills...'
                                />

                                <SelectComponent
                                    name='languages'
                                    options={languages}
                                    control={control}
                                    multi
                                    placeholder='Select languages...'
                                    defaultValue={{ label: 'English', 'value': 'en-US' }}
                                />

                                <CommonInput
                                    placeholder='Linkedin profile'
                                    control={control}
                                    name='linkedin_profile'
                                    id='linkedin_profile'
                                    key={'linkedin_profile'}
                                    icon={userIcon}
                                />
                                <CommonInput
                                    placeholder='Experience'
                                    control={control}
                                    name='experience_in_years'
                                    id='experience_in_years'
                                    type='number'
                                    key={'experience_in_years'}
                                    icon={lockIcon}
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
                        <p className='font-semibold text-blue-400'>Sign up</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}