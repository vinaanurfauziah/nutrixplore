// Components/Common/SectionHeading.jsx
export default function SectionHeading({ subtitle, title }) {
    return (
        <>
            <h5 className="mb-2 text-center text-lg font-extrabold text-[#70B9BE] dark:text-white">
                {subtitle}
            </h5>
            <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
                {title}
            </h2>
        </>
    );
}
