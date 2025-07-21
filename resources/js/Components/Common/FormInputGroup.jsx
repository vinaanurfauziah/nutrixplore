import InputError from './InputError';
import InputLabel from './InputLabel';
import TextInput from './TextInput';

export default function FormInputGroup({
    id,
    type = 'text',
    name,
    label,
    value,
    placeholder,
    autoComplete,
    isFocused,
    onChange,
    error,
}) {
    return (
        <div className="mx-auto mt-4 block w-full max-w-md font-normal">
            <InputLabel htmlFor={id} value={label} />
            <TextInput
                id={id}
                type={type}
                name={name}
                value={value}
                className="mx-auto mt-2 block w-full max-w-md rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900"
                placeholder={placeholder}
                autoComplete={autoComplete}
                isFocused={isFocused}
                onChange={onChange}
            />
            <InputError message={error} className="mt-2" />
        </div>
    );
}
