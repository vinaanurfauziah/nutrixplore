import Checkbox from '@/Components/Common/Checkbox';
import { Link } from '@inertiajs/react';

export default function RememberMeAndReset({ remember, onChange, canReset }) {
    return (
        <div className="mx-auto mt-4 flex w-full max-w-md items-center justify-between">
            <label className="flex items-center">
                <Checkbox
                    name="remember"
                    checked={remember}
                    onChange={onChange}
                />
                <span className="ms-2 text-sm text-gray-600">Ingat saya</span>
            </label>
            {canReset && (
                <Link
                    href={route('password.request')}
                    className="rounded-md text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Lupa kata sandi?
                </Link>
            )}
        </div>
    );
}
