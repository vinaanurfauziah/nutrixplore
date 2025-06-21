import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function ArticleDetailCard() {
    const [content, setContent] = useState('');

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
    ];

    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-gray-800">
                Konten Artikel
            </h2>

            <div className="h-[600px] overflow-hidden rounded-lg border">
                <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                    placeholder="Tulis konten artikel di sini..."
                    className="h-full"
                />
            </div>
        </div>
    );
}
