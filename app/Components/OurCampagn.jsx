import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const OurCampaign = () => {
  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 md:px-8 py-12" 
      id='our-campaign'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-8 text-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Our Campaign
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((item) => (
          <motion.div
            key={item}
            className="bg-[#fcd34d] rounded-2xl p-6 md:p-8 flex justify-between items-center group cursor-pointer hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <motion.div 
                className="text-sm font-medium mb-2 tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                OUR CAMPAIGN
              </motion.div>
              <motion.h2 
                className="text-xl md:text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Babu ki Rasoi
              </motion.h2>
            </div>
            
            <motion.div 
              className="bg-white rounded-full p-3 group-hover:translate-x-1 transition-transform"
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurCampaign;
