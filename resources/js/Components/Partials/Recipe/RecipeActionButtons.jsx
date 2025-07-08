import SaveButton from '@/Components/Common/SaveButton';
import { LuPrinter } from 'react-icons/lu';

export default function RecipeActionButtons({ onSave, onUnsave }) {
    return (
        <div className="relative w-full py-4 sm:static sm:flex sm:flex-row sm:items-center sm:justify-start sm:gap-4">
            <div className="sm:static">
                <a
                    href="#detail-resep"
                    className="inline-flex items-center justify-center rounded-md border bg-[#70B9BE] px-4 py-2 text-sm font-medium text-white hover:border-[#70B9BE] hover:bg-white hover:text-[#70B9BE] focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    Langsung ke Resep
                </a>
            </div>

            <div className="absolute right-0 top-4 flex gap-2 sm:static sm:ml-4 sm:flex-row">
                <button
                    onClick={onSave}
                    className="inline-flex items-center justify-center rounded-md border border-[#70B9BE] bg-white px-3 py-2 text-sm font-medium text-[#70B9BE] transition-all duration-300 hover:bg-[#70B9BE] hover:text-white focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    <SaveButton
                        onSave={onSave}
                        onUnsave={onUnsave}
                        showLabel={false}
                        className="text-inherit"
                    />
                    <span className="ml-2 hidden sm:inline">Simpan Resep</span>
                </button>

                <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-[#70B9BE] bg-white px-3 py-2 text-sm font-medium text-[#70B9BE] hover:bg-[#70B9BE] hover:text-white focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    <LuPrinter className="h-6 w-6" />
                    <span className="ml-2 hidden sm:inline">Print</span>
                </a>
            </div>
        </div>
    );
}
