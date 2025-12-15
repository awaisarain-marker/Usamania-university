import React from 'react';

interface Course {
    code: string;
    title: string;
    creditLecture: number | string;
    creditLab: number | string;
    total: number | string;
}

interface SemesterTableProps {
    semesterName: string;
    courses: Course[];
    totalCredits: number | string;
}

export default function SemesterTable({ semesterName, courses, totalCredits }: SemesterTableProps) {
    return (
        <div className="mb-8">
            <h3 className="text-[#002856] font-bold text-xl mb-4 bg-[#e6eef4] p-3 border-l-4 border-[#ed1c24] rounded-none">
                {semesterName}
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-[#002856] text-white">
                        <tr>
                            <th className="p-3 border border-[#002856] rounded-none">Course Code</th>
                            <th className="p-3 border border-[#002856] rounded-none">Course Title</th>
                            <th className="p-3 border border-[#002856] rounded-none">Credit Hours (Th)</th>
                            <th className="p-3 border border-[#002856] rounded-none">Lab</th>
                            <th className="p-3 border border-[#002856] rounded-none">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index} className="hover:bg-[#e6eef4] transition-colors border-b border-gray-200">
                                <td className="p-3 border border-gray-200 text-[#002856] font-medium rounded-none">{course.code}</td>
                                <td className="p-3 border border-gray-200 rounded-none">{course.title}</td>
                                <td className="p-3 border border-gray-200 text-center rounded-none">{course.creditLecture}</td>
                                <td className="p-3 border border-gray-200 text-center rounded-none">{course.creditLab}</td>
                                <td className="p-3 border border-gray-200 text-center font-bold text-[#ed1c24] rounded-none">{course.total}</td>
                            </tr>
                        ))}
                        <tr className="bg-[#e6eef4] font-bold border-t-2 border-[#002856]">
                            <td colSpan={4} className="p-3 text-right text-[#002856] rounded-none uppercase">Total Credit Hours</td>
                            <td className="p-3 text-center text-[#ed1c24] text-lg rounded-none">{totalCredits}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
