// Components/Partials/Recipe/RecipeActionButtons.jsx
import { FaRegBookmark } from 'react-icons/fa6';
import { LuPrinter } from 'react-icons/lu';

export default function RecipeActionButtons() {
    return (
        <div className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            <a
                href="#"
                className="mr-3 inline-flex items-center justify-center rounded-lg border bg-[#70B9BE] px-4 py-3 text-center text-lg font-medium text-white hover:border-[#70B9BE] hover:bg-white hover:text-[#70B9BE] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
                Langsung ke resep
            </a>
            <a
                href="#"
                className="mr-3 inline-flex items-center justify-center rounded-lg border border-[#70B9BE] bg-white px-5 py-3 text-center text-lg font-medium text-[#70B9BE] hover:bg-[#70B9BE] hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
                Simpan Resep
                <FaRegBookmark className="-mr-1 ml-2 h-6 w-6" />
            </a>
            <a
                href="#"
                className="mr-3 inline-flex items-center justify-center rounded-lg border border-[#70B9BE] bg-white px-5 py-3 text-center text-lg font-medium text-[#70B9BE] hover:bg-[#70B9BE] hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
                Print
                <LuPrinter className="-mr-1 ml-2 h-6 w-6" />
            </a>
        </div>
    );
}
