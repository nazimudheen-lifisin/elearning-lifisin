import { Control, Controller, FieldValues } from "react-hook-form";
import Select, { SingleValue } from 'react-select'

interface Props {
  options: { value: string, label: string }[]
  name: string
  control: Control<FieldValues>
  multi: boolean
  placeholder: string
  defaultValue: { label: string, value: string }
}


export default function SelectComponent({ name, options, control, multi = false, placeholder, defaultValue }: Props) {


  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
          <div>
            <Select
              options={options}
              placeholder={placeholder}
              onBlur={onBlur}
              value={multi ? [defaultValue, ...(value || [])?.filter((item: SingleValue<{ value: string, label: string }>) => item?.value !== defaultValue?.value)] : value}
              onChange={onChange}
              isMulti={multi}
              className={`${error ? 'border-red-300' : 'mb-9'}`}
              styles={{
                multiValueRemove: (base, state) => {
                  if (multi && state.data.value === defaultValue?.value) {
                    return { display: 'none' };
                  }
                  return base;
                }
              }}
            />

            {<span className=" text-red-400 font-semibold text-sm">{error ? error?.message : ''}</span>}
          </div>
        )}
      />
    </div>
  );
};
