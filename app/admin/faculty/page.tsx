'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit2 } from 'lucide-react';

interface Faculty {
    id: number;
    name: string;
    designation: string;
    bio: string;
    image: string;
    email: string;
}

export default function FacultyPage() {
    const [faculty, setFaculty] = useState<Faculty[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', designation: '', bio: '', image: '', email: '' });

    const fetchFaculty = async () => {
        setIsLoading(true);
        const { data } = await supabase.from('faculty').select('*').order('created_at', { ascending: false });
        if (data) setFaculty(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchFaculty();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const { error } = await supabase.from('faculty').insert([formData]);
        if (!error) {
            setFormData({ name: '', designation: '', bio: '', image: '', email: '' });
            fetchFaculty();
        } else {
            alert(error.message);
        }
        setIsSubmitting(false);
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure?')) return;
        const { error } = await supabase.from('faculty').delete().eq('id', id);
        if (!error) fetchFaculty();
    };

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Manage Faculty</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-8">
                        <h2 className="text-lg font-semibold mb-4 text-[#002856]">Add Faculty Member</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                placeholder="Name"
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                placeholder="Designation"
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                                value={formData.designation}
                                onChange={e => setFormData({ ...formData, designation: e.target.value })}
                            />
                            <input
                                placeholder="Email"
                                type="email"
                                className="w-full px-3 py-2 border rounded-lg"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                            <input
                                placeholder="Image URL"
                                className="w-full px-3 py-2 border rounded-lg"
                                value={formData.image}
                                onChange={e => setFormData({ ...formData, image: e.target.value })}
                            />
                            <textarea
                                placeholder="Short Bio"
                                className="w-full px-3 py-2 border rounded-lg"
                                rows={3}
                                value={formData.bio}
                                onChange={e => setFormData({ ...formData, bio: e.target.value })}
                            />
                            <button disabled={isSubmitting} className="w-full bg-[#ed1c24] text-white py-2 rounded-lg hover:bg-red-700">
                                {isSubmitting ? 'Saving...' : 'Add Faculty'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-3">Photo</th>
                                    <th className="px-6 py-3">Details</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {faculty.map(f => (
                                    <tr key={f.id} className="border-b last:border-0 hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            {f.image ? <img src={f.image} className="w-12 h-12 rounded-full object-cover" /> : <div className="w-12 h-12 bg-gray-200 rounded-full" />}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-bold">{f.name}</div>
                                            <div className="text-sm text-gray-500">{f.designation}</div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button onClick={() => handleDelete(f.id)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
