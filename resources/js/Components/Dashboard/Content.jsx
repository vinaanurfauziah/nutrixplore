import ArticleTable from './Article/ArticleTable';
import RecipeTable from './Recipe/RecipeTable';
import StatBox from './Stat/StatBox';
import { usePage } from '@inertiajs/react';

export default function Content() {
        const { totalResep } = usePage().props;
    return (
        <div className="space-y-12">
                  <section className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <StatBox title="Total Resep" value={totalResep} />
                <StatBox title="Total Artikel" value="20" />
            </section>

            <section className="mt-4">
                <RecipeTable />
            </section>

            <section className="mt-4">
                <ArticleTable />
            </section>
        </div>
    );
}
