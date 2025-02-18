import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import CommonInput from '@/components/CommonInput'
import SelectComponent from '@/components/SelectComponent'
import { languagesApi, signApi, skillsApi } from '@/services/userServices'
import type { ListResponse } from '@/types/auth'
import data from '@/data/register.json'
import { MentorFields, UserFields } from '@/types/auth'
import CommonButton from '@/components/CommonButton'
import CommonModal from '@/components/CommonModal'



const schema = (type: 'student' | 'mentor' | 'cirt') => yup.object().shape(
    type === 'cirt' ? {
        cirtifications: {
            cirt_name: yup.string().required('Name is required'),
            cirt_org: yup.string().required('Organization is required'),
            cirt_id: yup.string().required('Certification ID / License Number is required'),
            cirt_file: yup.string().required('Cirtification file is required')
        }
    } :
        {
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
                profile_picture: yup.mixed().nullable()
            }),
            ...(type === 'mentor' && {
                education: yup.object({
                    degree_type: yup.object().required('Eductation type is required'),
                    field_of_study: yup.string().required('Field of study is required'),
                    institution: yup.string().required('Institution is required'),
                    year_of_study: yup.object().required('Year of study is required'),
                    file: yup.object().nullable()
                }),
                cirtifications: yup.mixed().default(null),
                linkedin_profile: yup.string().url('Invalid linkedin profile').required('Linkedin profile is required'),
                experience_in_years: yup.string().matches(/^\d*$/, 'Only numbers allowd').required('Experience years is required'),
                skills: yup.array().required('Skills is required').typeError('Skills is required').min(1, 'Skills is required'),
                languages: yup.array().required('Languages is required').typeError('Languages is required').min(1, 'Languages is required'),
                availability: yup.object().required('Availability is required').typeError('Availability is required'),
                cover_story: yup.string().nullable().default(""),
            })
        })


type YearOption = {
    id: number;
    label: string;
    value: string;
}

const years: YearOption[] = [];

for (let year = 2024; year >= 2012; year--) {
    years.push({
        id: year,
        label: year.toString(),
        value: year.toString(),
    });
}

const showError = () => {
    window.alert('You must add at least one certificate')
}



export default function Register() {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [cirtifications, setCirtifications] = useState([])
    const [profile, setProfile] = useState<null | {}>(null);
    const [activeTab, setActiveTab] = useState<"student" | "mentor">("mentor");
    const navigate = useNavigate();



    const handleModal = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e?.stopPropagation();
        e?.preventDefault();

        setShowModal(!showModal)
    }, [showModal])

    const { control, reset, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema(showModal ? 'cirt' : activeTab))
    })


    const handleOnchange = (e) => {
        setProfile(e.target.files?.[0])
    }

    const { data: skillData } = useQuery<ListResponse>({
        queryKey: ['get-skills'],
        queryFn: skillsApi,
    })


    const { data: languageData } = useQuery<ListResponse>({
        queryKey: ['get-languages'],
        queryFn: languagesApi,
    })


    const { mutate } = useMutation<any>({
        mutationFn: signApi,
        mutationKey: ['signin-api'],
        onSuccess() {
            toast.success("Register successfully")
            navigate('/login')
        },
        onError(error) {
            toast.error(error?.message)
        }
    })


    useEffect(() => {
        reset({
            user: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password2: '',
                gender: null,
                phone_number: '',
                country: 'India',
                profile_picture: ''
            },
            ...(activeTab === 'mentor' && {
                education: yup.object({
                    degree_type: null,
                    field_of_study: '',
                    institution: '',
                    year_of_study: '',
                    file: ''
                }),
                cirtifications: null,
                linkedin_profile: '',
                experience_in_years: '',
                skills: [],
                languages: [{
                    value: '67b0d587d408f11781e4326c',
                    label: 'English'
                }],
                availability: '',
                cover_story: '',
            })
        })
    }, [activeTab]);

    console.log({ errors });



    const handleCirtificate = useCallback((data) => {

        setValue('cirt_file', '')
        setValue('cirt_org', '')
        setValue('cirt_name', '')
        setValue('cirt_id', '')

        setShowModal(false);
    }, [showModal])


    const onSubmit: SubmitHandler<UserFields & MentorFields> = (data) => {

        const formData = new FormData()

        if (profile) {
            formData.append('profile_picture', profile)
        }

        Object.entries(data.user).forEach(([key, value]) => {
            if (key === 'gender') formData.append(key, data.user.gender.value)
            else formData.append(key, value)
        })

        formData.append('role', activeTab);

        if (activeTab === 'mentor') {
            if (cirtifications?.length === 0) return showError()

            submitData = {
                ...data,
                user: {
                    ...data.user,
                    gender: data.user.gender.value,
                    role: activeTab,
                },
                education: [{
                    ...data.education,
                    year_of_study: data.education.year_of_study.value,
                    degree_type: data.education.degree_type.value
                }],
                availability: data.availability?.value,
                skills: data?.skills?.map((item: ListResponse) => item.id),
                languages: data?.languages?.map((item: ListResponse) => item.id),
                experience_in_years: parseInt(data.experience_in_years)
            }

        }

        mutate(formData);

    }


    const optionFun = useCallback((item: ListResponse) => ({ label: item?.name, value: item?._id }), [])


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

                <div className="flex w-full items-center justify-between mb-3 bg-gray-50 py-2 px-2">
                    <span className='font-bold text-xl'>Personal details</span>
                </div>

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
                        name='user.password2' reset
                        type='password'
                        id='password2'
                        key={'password2'}
                    />

                    <CommonInput
                        placeholder='Phone Number'
                        control={control}
                        name='user.phone_number'
                        id='phone_number'
                        type='number'
                        key={'phone_number'}
                    />

                    <SelectComponent
                        name='user.gender'
                        options={data?.genders}
                        control={control}
                        placeholder='Select gender...'
                    />

                    <CommonInput
                        placeholder='Profile Picture'
                        control={control}
                        type='file'
                        customOnChange={handleOnchange}
                        name='user.profile_picture'
                        id='profile_picture'
                        key={'profile_picture'}
                    />

                </div>

                {
                    activeTab === 'mentor' && (
                        <>
                            <div className="flex w-full items-center justify-between mb-3 bg-gray-50 py-2 px-2">
                                <span className='font-bold text-xl'>Education details</span>
                            </div>
                            <div className="mt-2 w-full grid grid-cols-3 items-center gap-2 mb-6">

                                <SelectComponent
                                    name='education.degree_type'
                                    options={data?.education}
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


                                <CommonInput
                                    placeholder='Education file'
                                    control={control}
                                    name='education.file'
                                    type='file'
                                    id='file'
                                    key={'file'}
                                />

                                {/* <div className='w-[80%] bg-[#11BECE] mx-auto rounded-4xl mb-auto py-2 flex items-center justify-center'>
                        <p className='font-bold text-center uppercase m-0'>
                            Submit
                        </p>
                    </div> */}
                            </div>

                            <div className="flex w-full items-center justify-between mb-3 bg-gray-50 py-2 px-2">
                                <span className='font-bold text-xl'>Professional details</span>
                            </div>

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
                                    options={skillData?.map(optionFun)}
                                    multi
                                    control={control}
                                    placeholder='Select skills...'
                                />

                                <SelectComponent
                                    name='languages'
                                    options={languageData?.map(optionFun)}
                                    control={control}
                                    multi
                                    placeholder='Select languages...'
                                    defaultValue={{ label: languageData?.[0]?.name, value: languageData?.[0]?._id }}
                                />

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
                                    options={data?.availability}
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

                            <div className="flex w-full items-center justify-between mb-16 bg-gray-50 py-2 px-2">
                                <span className='font-bold text-xl'>Cirtificates</span>

                                <CommonButton label='Add cirtificate' style='lg:w-[15%] capitalize text-xs' onClick={handleModal} />
                            </div>

                            {
                                showModal && (
                                    <CommonModal title='Add cirtificate' onClose={handleModal} onSubmit={handleSubmit(handleCirtificate)}>

                                        <CommonInput
                                            placeholder='Cirtification Name'
                                            control={control}
                                            name={`cirtifications.cirt_name`}
                                            id='cirt_name'
                                            key={'cirt_name'}
                                        />

                                        <CommonInput
                                            placeholder='Organization'
                                            control={control}
                                            name={`cirtifications.cirt_org`}
                                            id='cirt_org'
                                            key={'cirt_org'}
                                        />

                                        <CommonInput
                                            placeholder='Cirtification ID / Licence No'
                                            control={control}
                                            name={`cirtifications.cirt_id`}
                                            id='cirt_id'
                                            key={'cirt_id'}
                                        />

                                        <CommonInput
                                            control={control}
                                            name={`cirtifications.cirt_file`}
                                            type='file'
                                            id='cirt_file'
                                            key={'cirt_file'}
                                        />

                                    </CommonModal>
                                )
                            }
                        </>
                    )
                }

                <CommonButton label={'Submit'} onClick={handleSubmit(onSubmit)} />

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