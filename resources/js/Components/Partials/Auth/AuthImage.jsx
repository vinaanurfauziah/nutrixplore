import AutentikasiImage from '@/Assets/autentikasi.png';

export default function AuthImage() {
    return (
        <div className="hidden md:block md:w-1/2">
            <img
                src={AutentikasiImage}
                alt="Ilustrasi Autentikasi"
                className="h-full w-full object-cover"
            />
        </div>
    );
}