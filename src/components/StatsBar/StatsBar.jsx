import React from 'react';


const StatsBar = () => {
    const stats = [
        { label: 'Active Users', value: '50K+' },
    { label: 'Premium Tools', value: '200+' },
    { label: 'Rating', value: '4.9' }
];

    return (
       <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 px-4 mt-25">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-6 py-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-purple-100 text-sm md:text-base font-medium opacity-90 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
    );
};

export default StatsBar;