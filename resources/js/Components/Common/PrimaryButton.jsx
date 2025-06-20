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
                `inline-flex items-center justify-center rounded-lg bg-[#70B9BE] px-6 py-3 text-sm font-semibold text-white hover:bg-[#51979e] focus:outline-none focus:ring-2 focus:ring-[#70B9BE] focus:ring-offset-2 ${
                    disabled ? 'cursor-not-allowed opacity-50' : ''
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
