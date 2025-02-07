import { useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import Select from 'react-select'

// interface Props {
//   options: { value: string, label: string }[]
//   name: string
//   control: any
//   multi: boolean
//   placeholder: string
//   defaultValue: { label: string, value: string }
// }


export default function SelectComponent({ name, options, control, multi = false, placeholder, defaultValue }) {


  const handleChange = useCallback((selected) => {

    const updatedValue = selected ? [...selected] : []

    if (defaultValue && !selected?.find(item => item?.value === defaultValue?.value)) {
      updatedValue.push(defaultValue)
    }

    return updatedValue;
  }, [defaultValue])


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
              value={multi ? [defaultValue, ...(value || [])] : value}
              onChange={(selected) => onChange(multi ? handleChange(selected) : selected)}
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
