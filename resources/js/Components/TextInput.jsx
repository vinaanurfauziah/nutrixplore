import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-5 py-2.5 text-sm text-gray-900 focus:border-gray-500 focus:outline-gray-800 focus:ring-gray-500 ' +
                className
            }
            ref={localRef}
        />
    );
});
