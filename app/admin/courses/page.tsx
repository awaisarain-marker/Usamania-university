'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, ExternalLink } from 'lucide-react';

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
    const [formData, setFormData] = useState({ title: '', image: '', link: '' });

    // Fetch Courses
    const fetchCourses = async () => {
        setIsLoading(true);
        const { data, error } = await supabase
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
            fetchCourses(); // Refresh list
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
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Manage Courses</h1>
                    <p className="text-gray-500 mt-1">Add or remove courses from the homepage.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Form */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-8">
                        <h2 className="text-lg font-semibold mb-4 text-[#002856]">Add New Course</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ed1c24] focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Computer Science"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input
                                    type="url"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ed1c24] focus:border-transparent outline-none transition-all"
                                    placeholder="https://..."
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                />
                                <p className="text-xs text-gray-400 mt-1">Paste a direct image link.</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Link URL</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ed1c24] focus:border-transparent outline-none transition-all"
                                    placeholder="/academics/program-name"
                                    value={formData.link}
                                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#ed1c24] text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? 'Adding...' : <><Plus size={18} /> Add Course</>}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right: List */}
                <div className="lg:col-span-2">
                    {isLoading ? (
                        <div className="flex justify-center py-12">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ed1c24]"></div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-[#f8fafc] border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Image</th>
                                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm">Title & Link</th>
                                        <th className="px-6 py-4 font-semibold text-gray-600 text-sm text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {courses.length === 0 ? (
                                        <tr>
                                            <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                                No courses found. Add one on the left!
                                            </td>
                                        </tr>
                                    ) : (
                                        courses.map((course) => (
                                            <tr key={course.id} className="group hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <img src={course.image} alt={course.title} className="w-16 h-12 object-cover rounded-md bg-gray-200" />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <h4 className="font-semibold text-gray-900">{course.title}</h4>
                                                    <a href={course.link} target="_blank" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                                                        {course.link} <ExternalLink size={12} />
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button
                                                        onClick={() => handleDelete(course.id)}
                                                        className="text-gray-400 hover:text-red-600 transition-colors p-2"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
