import React from 'react';
import { motion } from 'framer-motion';

const ExperienceDesignSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        {/* Slide Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How Experience Design Shapes Business Processes
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            From User Research to Product Release
          </p>
        </div>

        {/* Main Artifacts Flow */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            
            {/* Artifact 1: Opportunity Insights */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Opportunity Insights</h3>
                <p className="text-gray-600 text-sm">From user research and pain points</p>
              </div>
            </motion.div>

            {/* Artifact 2: Process Maps (PINNED) */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl border-4 border-pink-400 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -top-3 -right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                PINNED
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Process Maps</h3>
                <p className="text-gray-600 text-sm">Business process optimization</p>
              </div>
            </motion.div>

            {/* Artifact 3: Product Requirements */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Product Requirements</h3>
                <p className="text-gray-600 text-sm">User stories and prioritized backlog</p>
              </div>
            </motion.div>

            {/* Artifact 4: Product Release (PINNED) */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl border-4 border-purple-400 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute -top-3 -right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                PINNED
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Product Release</h3>
                <p className="text-gray-600 text-sm">Validated, user-tested solutions</p>
              </div>
            </motion.div>
          </div>

          {/* Process Axis Labels (Background) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-full">
              <div className="flex items-end justify-center pb-4">
                <span className="text-sm text-gray-400 font-medium bg-white/80 px-3 py-1 rounded-full">
                  E2E Journey
                </span>
              </div>
              <div className="flex items-end justify-center pb-4">
                <span className="text-sm text-gray-400 font-medium bg-white/80 px-3 py-1 rounded-full">
                  Business Process Mapping
                </span>
              </div>
              <div className="flex items-end justify-center pb-4">
                <span className="text-sm text-gray-400 font-medium bg-white/80 px-3 py-1 rounded-full">
                  Delivery Planning
                </span>
              </div>
              <div className="flex items-end justify-center pb-4">
                <span className="text-sm text-gray-400 font-medium bg-white/80 px-3 py-1 rounded-full">
                  Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <motion.div 
          className="bg-white p-12 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Where We Add Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shape Business Processes</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through process mapping and service blueprints, we help organizations understand and optimize their workflows.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shape Product Solutions</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through user research and rapid prototyping, we ensure products meet real user needs and business goals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Flow Arrows */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 pointer-events-none">
          <svg className="w-full h-8" viewBox="0 0 1200 32">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill="#6B7280"
                />
              </marker>
            </defs>
            <path
              d="M 200 16 Q 300 16 400 16"
              stroke="#6B7280"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <path
              d="M 600 16 Q 700 16 800 16"
              stroke="#6B7280"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <path
              d="M 1000 16 Q 1100 16 1200 16"
              stroke="#6B7280"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDesignSlide;
