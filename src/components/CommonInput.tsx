import { useCallback, useState } from "react"
import { Control, Controller, FieldValues } from "react-hook-form"


type Props = {
    id: string
    name: string
    control: Control<FieldValues>
    required?: boolean
    readOnly?: boolean
    placeholder?: string
    type?: 'number' | 'text' | 'email' | 'password',
    icon?: React.ReactNode,
    label?: string
}

export default function CommonInput({ id, control, name, required, readOnly, placeholder, type = 'text', label }: Props) {

    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isFocus, setIsFocus] = useState(false);


    const handlePassword = useCallback(function () {
        setIsPasswordHidden(!isPasswordHidden)
    }, [isPasswordHidden]);


    const onFocus = useCallback(() => {
        setIsFocus(true)
    }, [])

    const onBlur = useCallback(() => {
        setIsFocus(!true)
    }, [])

    return (
        <div className="w-full">
            <div className="flex flex-1 flex-row items-center">
                <label
                    className="block font-[400]  text-[#3A3B3C]"
                >
                    {label}
                </label>
                {required && <span className="text-[#f00]">*</span>}
            </div>

            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value }, fieldState: { error } }) => (

                    <>
                        <div className={`flex border-[#EDEEF0] ${error ? 'border-red-300' : 'mb-9'} bg-[#fff] h-full border-2`}>
                            {/* {
                            icon && (
                                <div className="w-8 h-full flex items-center justify-center">
                                    {icon}
                                </div>
                            )
                        } */}

                            <input
                                id={id}
                                type={type ? type && type === 'password' && isPasswordHidden ? 'password' : 'text' : type}
                                required={required}
                                placeholder={placeholder}
                                value={value}
                                readOnly={readOnly}
                                className={`w-full  flex-4 p-[4px] ${isFocus && 'shadow-[rgb(119, 212, 196)] shadow-lg'} focus:outline-none rounded-4xl px-2.5 ${readOnly ? "bg-[#CDDCED]  px-2" : ""} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                                aria-invalid={error ? true : false}
                                onFocus={onFocus}
                                onChange={onChange}
                                onBlur={onBlur}
                            />

                            {
                                type === 'password' && (
                                    <div onClick={handlePassword} className="w-6 mr-2 h-6 cursor-pointer my-auto flex items-center justify-center">
                                        {!isPasswordHidden ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray">
                                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray">
                                                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                            </svg>
                                        )}
                                    </div>
                                )
                            }
                        </div>

                        {<p className="text-red-400 font-semibold text-sm">{error ? error?.message : ""}</p>}
                    </>
                )}
            />
        </div>
    )
}