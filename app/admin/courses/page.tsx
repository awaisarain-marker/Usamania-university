'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, ExternalLink, Search, Filter, BookOpen } from 'lucide-react';

interface Course {
    id: number;
    title: string;
    image: string;
    link: string;
    alt: string;
}

export default function CoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [formData, setFormData] = useState({ title: '', image: '', link: '' });

    // Fetch Courses
    const fetchCourses = async () => {
        setIsLoading(true);
        const { data } = await supabase
            .from('courses')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setCourses(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    // Add Course
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { error } = await supabase.from('courses').insert([
            { ...formData, alt: formData.title + ' Image' }
        ]);

        if (!error) {
            setFormData({ title: '', image: '', link: '' });
            setShowAddModal(false);
            fetchCourses();
        } else {
            alert('Error adding course: ' + error.message);
        }
        setIsSubmitting(false);
    };

    // Delete Course
    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this course?')) return;

        const { error } = await supabase.from('courses').delete().eq('id', id);
        if (!error) {
            fetchCourses();
        } else {
            alert('Error deleting: ' + error.message);
        }
    };

    return (
        <div className="max-w-screen-2xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-[#1a1a1a]">Courses</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage academic programs and courses displayed on the homepage.</p>
                </div>
                <button
                    onClick={() => setShowAddModal(!showAddModal)}
                    className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm active:scale-95"
                >
                    <Plus size={18} />
                    <span>Add Course</span>
                </button>
            </div>

            {/* Add Form (Conditionally visible) */}
            {showAddModal && (
                <div className="mb-8 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800">New Course Details</h3>
                        <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600"><span className="sr-only">Close</span>✕</button>
                    </div>
                    <div className="p-6">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-2xl">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Course Title</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2.5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                    placeholder="e.g. Bachelor of Computer Science"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Image URL</label>
                                    <input
                                        type="url"
                                        required
                                        className="w-full px-3 py-2.5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                        placeholder="https://..."
                                        value={formData.image}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Link URL</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-3 py-2.5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                                        placeholder="/academics/..."
                                        value={formData.link}
                                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-2">
                                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-[#333] shadow-sm disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Saving...' : 'Save Course'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">

                {/* Filters / Toolbar */}
                <div className="px-6 py-4 border-b border-gray-100 flex gap-4 items-center">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-black focus:border-black outline-none"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Filter size={16} />
                        <span>Filter</span>
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-[80px]">Image</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Link</th>
                                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {isLoading ? (
                                [...Array(3)].map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-4"><div className="h-10 w-12 bg-gray-100 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 w-32 bg-gray-100 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 w-48 bg-gray-100 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"></td>
                                    </tr>
                                ))
                            ) : courses.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                                                <BookOpen size={20} className="text-gray-400" />
                                            </div>
                                            <p className="text-base font-medium text-gray-900">No courses found</p>
                                            <p className="text-sm mt-1 mb-4">Get started by creating a new course.</p>
                                            <button onClick={() => setShowAddModal(true)} className="text-sm font-medium text-blue-600 hover:underline">Add Course</button>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                courses.map((course) => (
                                    <tr key={course.id} className="group hover:bg-gray-50/80 transition-colors">
                                        <td className="px-6 py-4 align-middle">
                                            <div className="relative h-10 w-14 rounded overflow-hidden bg-gray-100 border border-gray-200">
                                                <img src={course.image} alt="" className="h-full w-full object-cover" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 align-middle">
                                            <span className="text-sm font-medium text-gray-900">{course.title}</span>
                                        </td>
                                        <td className="px-6 py-4 align-middle hidden md:table-cell">
                                            <a href={course.link} target="_blank" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                                                {course.link}
                                                <ExternalLink size={10} />
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 align-middle text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleDelete(course.id)}
                                                    className="p-1.5 text-gray-400 hover:text-red-600 rounded hover:bg-red-50"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer (Placeholder) */}
                {!isLoading && courses.length > 0 && (
                    <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                        <span className="text-xs text-gray-500">Showing {courses.length} items</span>
                        <div className="flex gap-2">
                            <button disabled className="px-3 py-1 text-xs font-medium text-gray-400 bg-white border border-gray-200 rounded disabled:opacity-50">Previous</button>
                            <button disabled className="px-3 py-1 text-xs font-medium text-gray-400 bg-white border border-gray-200 rounded disabled:opacity-50">Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
