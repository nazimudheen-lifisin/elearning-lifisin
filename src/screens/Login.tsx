import student from '../assets/student.png.png'
import CommonInput from '../components/CommonInput'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { loginApi } from '../api/authApi'




export default function Login() {

    const [forgot, setForgot] = useState(false);

    const schema = yup.object(!forgot ? {
        username: yup.string().required('Name is required'),
        password: yup.string().required('Password is required')
    } : {
        email: yup.string().email('Type must be email').required('Email is required')
    })

    const { mutate } = useMutation({
        mutationKey: ['login-api'],
        mutationFn: loginApi,
        onError() {},
        onSuccess() {}
    })

    const { control, reset, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const handleForgot = useCallback(() => {
        setForgot(!forgot)
    }, [forgot]);




    return (
        <div className="h-screen flex items-center justify-center">
            <div className="lg:min-h-[60vh] shadow-xl bg-[#fff] lg:w-[1050px] rounded-4xl flex overflow-hidden">
                <div className="flex-2 bg-[#9de6ed] items-center justify-center flex flex-col px-8">
                    <img className='w-24 h-24 bg-blue-500 rounded-full p-2' src={student} alt="student.png" />

                    <span className='text-[25px] mb-2 font-bold text-center '>Let's get you up setup</span>
                    <p className='text-center text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus ut amet ipsam, id non perspiciatis minus laborum blanditiis autem obcaecati itaque. Nulla aut magnam et, amet debitis quas temporibus.</p>
                </div>

                <div className="flex-3 bg-white px-8">
                    <h1 className='mt-4 text-center'>{forgot ? 'Forgot your password?' : 'Login to your account'}</h1>
                    <p className='mb-4 text-center'>{forgot ? 'Enter your registered email' : 'Please login to continue'}</p>

                    <div className='h-full w-[80%] flex mx-auto flex-col mt-8'>

                        <div className="w-full gap-2">

                            {
                                forgot ? (
                                    <>
                                        <CommonInput
                                            placeholder='Email'
                                            control={control}
                                            name='email'
                                            type='email'
                                            id='email'
                                            key={'email'}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <CommonInput
                                            placeholder='Username'
                                            control={control}
                                            name='username'
                                            id='username'
                                            key={'username'}
                                        />

                                        <CommonInput
                                            placeholder='Password'
                                            control={control}
                                            name='password'
                                            id='password'
                                            type='password'
                                            key={'password'}
                                        />

                                        <p onClick={handleForgot} className='font-bold text-right w-full mb-4 cursor-pointer'>Forgot Password?</p>
                                    </>
                                )
                            }

                            <div onClick={handleSubmit(mutate)} className='w-[80%] text-white bg-[#11BECE] mx-auto rounded-4xl mb-auto py-2 flex items-center justify-center'>
                                <p className='font-bold text-center uppercase m-0'>
                                    Submit
                                </p>
                            </div>
                        </div>


                        <div className='mt-4 w-full  flex justify-center items-center'>
                            <p className='font-normal'>{forgot ? 'Back to ' : "Don't have an account"} </p>
                            &nbsp;
                            {
                                forgot ? (
                                    <p onClick={handleForgot} className='font-semibold text-blue-400 cursor-pointer'>Sign up</p>
                                ) : (
                                    <Link to={'/register'}>
                                    <p className='font-semibold text-blue-400'>{'Sign up'}</p>
                                </Link>
                                )
                            }
                        </div>
                    </div>

                    {/* 
                    <div className="flex mt-2 mx-auto w-[60%] relative border-2 border-gray-400 rounded-4xl overflow-hidden my-4">
                        <div
                            className={`absolute w-[50%] ${type ? 'left-0' : 'right-0'} rounded-4xl z-0 h-full bg-amber-700 transition-all duration-300 ease-in-out`}
                            style={{ transitionDelay: '1000ms' }}
                        />

                        <button className='p-[4px] flex-1' onClick={() => changeType(false)}>
                            <h4 className={`text-[10px] ${type ? "text-white" : 'text-black'} relative z-10`}>Student</h4>
                        </button>
                        <button className='p-[4px] flex-1' onClick={() => changeType(true)}>
                            <h4 className={`text-[.6rem] ${!type ? "text-white" : 'text-black'} relative z-10`}>Mentor</h4>
                        </button>
                    </div> */}


                </div>
            </div>
        </div>
    )
}