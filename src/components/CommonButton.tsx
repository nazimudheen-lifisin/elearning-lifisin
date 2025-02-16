
type Props = {
    label: string,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
    style?: string
}

function CommonButton({ label, onClick, style }: Props) {
    return (
        <div onClick={onClick} className={`transition-transform cursor-pointer transform hover:scale-105 text-white bg-[#11BECE] py-2 flex items-center justify-center uppercase ${style ? style : 'mb-auto  mx-auto rounded-4xl lg:w-[50%] mt-6'}`}>
            <p className='font-bold text-center m-0'>
                {label}
            </p>
        </div>
    )
}

export default CommonButton