export default function AuthLayout({ children }) {
    return (
        <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gray-100">
            <div className="flex h-full w-full bg-white shadow-md">
                {children}
            </div>
        </div>
    );
}