import FilterButton from '@/Components/Common/FilterButton';

export default function ArticleFilter({ options }) {
    return (
        <div className="mb-4 flex flex-wrap gap-2">
            <FilterButton text="Artikel" options={options} />
        </div>
    );
}
