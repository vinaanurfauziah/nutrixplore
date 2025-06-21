import PrimaryButton from '@/Components/Common/PrimaryButton';

export default function AuthGoogleButton({ disabled }) {
    return (
        <div className="flex flex-col items-center">
            <PrimaryButton
                className="mx-auto mt-6 w-full max-w-md items-center justify-center"
                disabled={disabled}
            >
                Masuk dengan Google
            </PrimaryButton>

            <div className="mx-auto mt-8 w-full max-w-md border-t border-gray-300"></div>
        </div>
    );
}