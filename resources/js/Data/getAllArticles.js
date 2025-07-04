import artikelData from './artikelData';

export default function getAllArticles() {
    return artikelData.map((artikel) => ({
        ...artikel,
        labels: [artikel.category],
    }));
}
