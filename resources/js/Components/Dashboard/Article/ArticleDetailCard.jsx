import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function ArticleDetailCard({ value, onChange, error }) {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ],
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'align',
        'list',
        'bullet',
        'link',
        'image',
        'clean',
    ];

    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-gray-800">Konten Artikel</h2>
            <div className="h-[600px] overflow-hidden rounded-lg border">
                {/* Gunakan style untuk atur tinggi, bukan className */}
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={onChange}
                    modules={modules}
                    formats={formats}
                    placeholder="Tulis konten artikel di sini..."
                    style={{ height: '100%' }}
                />
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
}
