'use client';

import React, { useState } from 'react';
import { Calendar, Plus, MapPin, Search } from 'lucide-react';

export default function EventsPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-[#1a1a1a]">Events</h1>
                    <p className="text-sm text-gray-500 mt-1">Schedule and manage upcoming university events.</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm"
                >
                    <Plus size={18} />
                    <span>Create Event</span>
                </button>
            </div>

            {/* Empty State */}
            <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex gap-4 items-center">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Find events..."
                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-black outline-none"
                        />
                    </div>
                </div>

                <div className="px-6 py-20 text-center text-gray-500 flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Calendar size={24} className="text-gray-300" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">No upcoming events</h3>
                    <p className="max-w-sm text-sm mt-1 mb-6 mx-auto">
                        There are no events scheduled at the moment. Add a new event to keep everyone updated.
                    </p>
                    <button onClick={() => setShowModal(true)} className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                        Schedule an event
                    </button>
                </div>
            </div>

            {/* Add Modal (Simple) */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-semibold text-lg text-gray-900">Schedule Event</h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="e.g. Annual Convocation" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input type="date" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                    <input type="time" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input type="text" className="w-full pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="e.g. Main Auditorium" />
                                </div>
                            </div>
                            <div className="pt-4 flex justify-end gap-3">
                                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">Cancel</button>
                                <button className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800">Save Event</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
