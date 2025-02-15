import { Control, Controller, FieldValues } from "react-hook-form";
import Select, { SingleValue } from 'react-select'
import withFocusChecker from "./withFocusChecker";


interface Props {
  options: Array<{ value: string, label: string }>
  name: string
  control: Control<FieldValues>
  multi: boolean
  placeholder: string
  defaultValue: { label: string, value: string },
  isFocused: boolean,
  onFocus: () => void,
  onBlur: () => void
}


function SelectComponent({ name, options, control, multi = false, placeholder, defaultValue, isFocused, onFocus, onBlur }: Props) {


  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div>
            <Select
              options={options}
              placeholder={placeholder}
              onFocus={onFocus}
              onBlur={onBlur}
              value={multi ? [defaultValue, ...(value || [])?.filter((item: SingleValue<{ value: string, label: string }>) => item?.value !== defaultValue?.value)] : value}
              onChange={onChange}
              isMulti={multi}
              className={`${error?.message ? 'border-red-300' : 'mb-9'}`}
              components={{ ClearIndicator: () => null }}
              styles={{
                control: base => ({
                  ...base,
                  borderColor: isFocused ? '#11bece' : '#edeef0',
                  borderWidth: 2,
                  boxShadow: 'red',
                  ...(error && {
                    borderColor: '#FFA2A2',
                    marginTop: -9
                  }),
                }),
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


export default withFocusChecker(SelectComponent)