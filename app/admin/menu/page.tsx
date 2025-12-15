'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, PlusCircle, Save } from 'lucide-react';

interface MenuItem {
    id: number;
    label: string;
    url: string;
    parent_id: number | null;
    order_index: number;
}

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [newLabel, setNewLabel] = useState('');
    const [newUrl, setNewUrl] = useState('');

    const fetchMenu = async () => {
        const { data } = await supabase.from('menus').select('*').order('order_index');
        if (data) setMenuItems(data);
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    const addMenu = async () => {
        if (!newLabel || !newUrl) return;
        await supabase.from('menus').insert([{ label: newLabel, url: newUrl }]);
        setNewLabel('');
        setNewUrl('');
        fetchMenu();
    };

    const deleteMenu = async (id: number) => {
        if (!confirm("Are you sure?")) return;
        await supabase.from('menus').delete().eq('id', id);
        fetchMenu();
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Manage Menus</h1>

            {/* Add New */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex gap-4 items-end">
                <div className="flex-1">
                    <label className="text-sm font-medium">Label</label>
                    <input className="w-full border rounded px-3 py-2" value={newLabel} onChange={e => setNewLabel(e.target.value)} placeholder="Home" />
                </div>
                <div className="flex-1">
                    <label className="text-sm font-medium">URL</label>
                    <input className="w-full border rounded px-3 py-2" value={newUrl} onChange={e => setNewUrl(e.target.value)} placeholder="/" />
                </div>
                <button onClick={addMenu} className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700">
                    <PlusCircle size={18} /> Add Link
                </button>
            </div>

            {/* List */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-3">Label</th>
                            <th className="px-6 py-3">URL</th>
                            <th className="px-6 py-3 w-20">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {menuItems.map(item => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-3 font-medium">{item.label}</td>
                                <td className="px-6 py-3 text-gray-500">{item.url}</td>
                                <td className="px-6 py-3">
                                    <button onClick={() => deleteMenu(item.id)} className="text-red-500 hover:text-red-700">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
