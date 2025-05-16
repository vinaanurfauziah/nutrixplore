export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `font-regular focus:[#70B9BE] inline-flex items-center rounded-lg border border-transparent bg-[#042628] px-5 py-2.5 text-lg tracking-widest text-white transition duration-150 ease-in-out hover:bg-[#70B9BE] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
