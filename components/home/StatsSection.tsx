export default function StatsSection() {
    return (
        <section className="py-16 bg-primary-blue text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
                        <div className="text-sm md:text-base uppercase tracking-wide opacity-80">Years of Excellence</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold mb-2">40+</div>
                        <div className="text-sm md:text-base uppercase tracking-wide opacity-80">Nationalities</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold mb-2">12:1</div>
                        <div className="text-sm md:text-base uppercase tracking-wide opacity-80">Student/Faculty Ratio</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
                        <div className="text-sm md:text-base uppercase tracking-wide opacity-80">Employed Alumni</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
