import { useController, Control } from 'react-hook-form';

interface TextInputProps {
    name: string;
    control: Control<any>;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean; 
    className?: string;
    readOnly?: boolean;
    onChangeValue?: any;
    values?: string;
    progress?: number;
    accept?: string;
}

const FileInput: React.FC<TextInputProps> = ({
    name,
    control,
    label,
    placeholder = '',
    required = false,
    className,
    readOnly,
    onChangeValue,
    progress,
    accept
}) => {
    const {
        field: { onBlur, onChange },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: '',
    });


    return (
        <div className={`relative ${className ? className : ''} h-1`}>
            <label htmlFor={name} className="block text-[#03173D] text-responsive-10px font-[700] ">
                {label}
                {required && <span className="text-red-500 text-responsive-10px ml-1">*</span>} {/* Show asterisk if required */}
            </label>
            <input
                id={name}
                name={name}
                type={"file"}
                accept={accept}
                // value={values ? values : value}
                onBlur={onBlur}
                onChange={(e) => {
                    //onChange(e?.target?.files)
                    console.log(e);
                    
                    if(onChangeValue){
                        onChangeValue(e)
                    }
                    else{
                        onChange(e?.target?.files)
                    }
                }}
                
                placeholder={placeholder}
                readOnly={readOnly}
                className={`shadow appearance-none border border-[#BAB5B5]  rounded-[0.0625rem] w-full py-[0.22rem] px-[0.56rem] text-[#000000] leading-tight  text-responsive-10px focus:outline-none focus:shadow-outline ${readOnly ? "bg-[#f3f4f6]" : "bg-white"} ${error ? 'border-red-500' : ''}`}
            />
            {progress && progress > 0 && <div className="w-full  rounded-full h-full">
                <div
                    className={` h-1 text-responsive-9px flex items-center ${progress === 100 ? !error ? "bg-green-700" : "" : !error ? "bg-blue-900" : ""}`}
                    style={{ width: `${progress || 0}%` }}
               />
                
            </div>}
            {error && <p className="text-red-500 text-responsive-8px italic">{error.message}</p>}
        </div>
    );
};

export default FileInput;