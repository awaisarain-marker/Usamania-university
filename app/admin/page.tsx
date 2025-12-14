'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { BookOpen, Users } from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState({ courses: 0, staff: 0 });

    useEffect(() => {
        async function fetchStats() {
            const { count: coursesCount } = await supabase.from('courses').select('*', { count: 'exact', head: true });
            // const { count: staffCount } = await supabase.from('staff').select('*', { count: 'exact', head: true }); 
            // Commented out staff until table exists
            setStats({ courses: coursesCount || 0, staff: 0 });
        }
        fetchStats();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Courses</p>
                        <p className="text-3xl font-bold text-[#002856] mt-1">{stats.courses}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg text-[#002856]">
                        <BookOpen size={24} />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Active Staff</p>
                        <p className="text-3xl font-bold text-[#002856] mt-1">-</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg text-green-600">
                        <Users size={24} />
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Welcome to your new Dashboard!</h3>
                <p className="text-blue-800">
                    From here you can manage all the dynamic content of your website.
                    Use the sidebar to navigate to <strong>Courses</strong> to start adding content.
                </p>
            </div>
        </div>
    );
}
