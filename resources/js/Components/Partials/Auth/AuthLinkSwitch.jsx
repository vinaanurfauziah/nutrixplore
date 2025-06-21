import { route } from 'ziggy-js';

export default function AuthLinkSwitch({ type }) {
    const isLogin = type === 'login';

    return (
        <p className="mt-6 text-center text-sm font-normal text-gray-600">
            {isLogin ? 'Belum memiliki akun?' : 'Sudah memiliki akun?'}
            <a
                href={route(isLogin ? 'register' : 'login')}
                className="ml-1 mt-4 inline-flex text-sm font-medium text-black hover:text-gray-600"
            >
                {isLogin ? 'Daftar di sini' : 'Login di sini'}
            </a>
        </p>
    );
}