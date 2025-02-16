import ChildrenProps from '@/types/ChildrenProps'
import CommonButton from './CommonButton'

type Props = {
    onClose: (event: any) => void,
    onSubmit: () => void,
    title: string,
} & ChildrenProps

function CommonModal({ title, onClose, children, onSubmit }: Props) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[70%] overflow-auto relative">
                <div className="flex justify-center items-center bg-teal-100 p-2">
                    <span className="text-2xl font-semibold text-center uppercase">{title}</span>
                    <div
                        onClick={onClose}
                        className=" cursor-pointer absolute top-2 right-2 bg-black w-6 hover:text-gray-400 flex items-center justify-center h-6 rounded-lg text-white"
                    >
                        ✕
                    </div>
                </div>

                <div className="mt-4 p-6">{children}</div>

                <div className="mt-4 flex justify-end p-2 gap-3">
                    <CommonButton
                        onClick={onSubmit}
                        style="bg-cyan-500 font-medium text-white px-4 py-2 text-sm transform transition-all ease-in delay-50"
                        label='Submit'
                    />

                    <CommonButton
                        onClick={onClose}
                        style="bg-gray-400 text-white px-4 font-medium py-2 text-sm transform transition-all ease-in delay-50"
                        label='Close'
                    />
                </div>
            </div>
        </div>
    )
}

export default CommonModal