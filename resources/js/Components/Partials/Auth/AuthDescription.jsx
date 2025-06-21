export default function AuthDescription({ children }) {
    return (
        <div className="my-3 flex justify-center text-sm text-gray-600">
            <p className="block max-w-[400px] text-center">{children}</p>
        </div>
    );
}
