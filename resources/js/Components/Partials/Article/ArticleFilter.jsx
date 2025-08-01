export default function ArticleFilter({ options, selected = [], onChange }) {
    const toggleOption = (option) => {
        let updated = [];

        if (option.id === 'all') {
            updated = ['all'];
        } else {
            if (selected.includes(option.id)) {
                updated = selected.filter((item) => item !== option.id);
            } else {
                updated = [
                    ...selected.filter((item) => item !== 'all'),
                    option.id,
                ];
            }

            if (updated.length === 0) {
                updated = ['all'];
            }
        }

        onChange(updated);
    };

    return (
        <div className="mb-6">
            <div className="mb-3 flex flex-wrap gap-2">
                {options.map((option, index) => {
                    const isActive = selected.includes(option.id);
                    return (
                        <button
                            key={option.id ?? index}
                            onClick={() => toggleOption(option)}
                            className={`transform rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
                                isActive
                                    ? 'bg-[#70B9BE] text-white'
                                    : 'bg-white text-gray-800 hover:bg-gray-100'
                            } hover:scale-105 hover:shadow-md`}
                        >
                            {option.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
