// konten
import ArticleTable from './Article/ArticleTable';
import RecipeTable from './Recipe/RecipeTable';
import StatBox from './Stat/StatBox';

export default function Content() {
    return (
        <div className="space-y-12">
            {/* Statistik ringkas */}
            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatBox title="Total Resep" value="40" />
                <StatBox title="Total Artikel" value="20" />
                <StatBox title="Kategori Resep & Artikel" value="10" />
                <StatBox title="Total Satuan Takaran" value="8" />
            </section>

            {/* Daftar Resep */}
            <section className="mt-4">
                <RecipeTable />
            </section>

            {/* Daftar Artikel */}
            <section className="mt-4">
                <ArticleTable />
            </section>
        </div>
    );
}
