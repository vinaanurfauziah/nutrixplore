import artikelData from '@/data/artikelData';

export default function findRelatedArticles(currentSlug, currentTags) {
    return artikelData.filter((item) => {
        if (item.slug === currentSlug) return false;
        return item.tags.some((tag) => currentTags.includes(tag));
    });
}
