import React, { useCallback, useState } from "react"

export default function withFocusChecker(WrappedComponent: React.FC) {
    return function (props: React.ComponentProps<any>) {
        const [focus, setFocus] = useState(false);

        const handleFocus = useCallback(() => {
            setFocus(true)
        }, [])

        const handleBlur = useCallback(() => {
            setFocus(false)
        }, [])

        return (
            <WrappedComponent
                {...props}
                isFocused={focus}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        )
    }
}