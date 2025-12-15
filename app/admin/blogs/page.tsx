'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit2, Search, Filter, Image as ImageIcon } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    published: boolean;
    category_id: number;
}

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    // Dummy data fetch simulation
    const fetchBlogs = async () => {
        setIsLoading(true);
        // const { data } = await supabase.from('blog_posts').select('*');
        // setBlogs(data || []);
        setTimeout(() => {
            setBlogs([]);
            setIsLoading(false);
        }, 500);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-[#1a1a1a]">Blog Posts</h1>
                    <p className="text-sm text-gray-500 mt-1">Create and manage news, updates, and articles.</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm"
                >
                    <Plus size={18} />
                    <span>Write Post</span>
                </button>
            </div>

            {/* Add Form (Simplified for UI Demo) */}
            {showModal && (
                <div className="mb-8 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800">New Article</h3>
                        <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
                    </div>
                    <div className="p-6 space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Article Title</label>
                            <input type="text" className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="Enter article title..." />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                                <select className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg outline-none">
                                    <option>News</option>
                                    <option>Research</option>
                                    <option>Student Life</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                                <select className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg outline-none">
                                    <option>Draft</option>
                                    <option>Published</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Content</label>
                            <textarea rows={6} className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg outline-none" placeholder="Write your post content here..."></textarea>
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg">Cancel</button>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg">Create Post</button>
                        </div>
                    </div>
                </div>
            )}


            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
                {/* Toolbar */}
                <div className="px-6 py-4 border-b border-gray-100 flex gap-4 items-center">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search posts..."
                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-black outline-none"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Filter size={16} />
                        <span>Filter</span>
                    </button>
                </div>

                {/* Empty State / Table */}
                {blogs.length === 0 ? (
                    <div className="px-6 py-16 text-center text-gray-500 flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <ImageIcon size={24} className="text-gray-300" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No posts yet</h3>
                        <p className="max-w-sm text-sm mt-1 mb-6 mx-auto">Write your first blog post to share news with your students and faculty.</p>
                        <button onClick={() => setShowModal(true)} className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                            Create new post
                        </button>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Title</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {/* Rows would map here */}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
