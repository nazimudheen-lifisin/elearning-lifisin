
type Props = {
    label: string,
    onClick: () => void,
    style?: string
}

function CommonButton({ label, onClick, style }: Props) {
    return (
        <div onClick={onClick} className={`${style} lg:w-[50%] transition-transform mt-6 transform hover:scale-105 text-white bg-[#11BECE] mx-auto rounded-4xl mb-auto py-2 flex items-center justify-center`}>
            <p className='font-bold text-center uppercase m-0'>
                {label}
            </p>
        </div>
    )
}

export default CommonButton