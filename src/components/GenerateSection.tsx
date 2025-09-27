'use client';

import { 
  Image, 
  Video, 
  Zap, 
  Sparkles, 
  Edit3, 
  Mic, 
  Move, 
  GraduationCap,
  Palette,
  Type,
  Camera,
  Wand2
} from 'lucide-react';

// Feature cards data - easily customizable and extensible
const generateFeatures = [
  {
    id: 1,
    title: "Image (New)",
    description: "Create stunning images with advanced AI models",
    icon: Image,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    href: "/generate/image"
  },
  {
    id: 2,
    title: "Video",
    description: "Generate dynamic videos from text prompts",
    icon: Video,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    href: "/generate/video"
  },
  {
    id: 3,
    title: "Realtime",
    description: "Real-time AI generation with instant results",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    href: "/generate/realtime"
  },
  {
    id: 4,
    title: "Enhancer (New)",
    description: "Upscale and enhance existing images",
    icon: Sparkles,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    href: "/generate/enhancer"
  },
  {
    id: 5,
    title: "Edit (New)",
    description: "AI-powered image editing and manipulation",
    icon: Edit3,
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    borderColor: "border-rose-200 dark:border-rose-800",
    href: "/generate/edit"
  },
  {
    id: 6,
    title: "Video Lipsync (New)",
    description: "Sync audio with video using AI technology",
    icon: Mic,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    href: "/generate/lipsync"
  },
  {
    id: 7,
    title: "Motion Transfer (New)",
    description: "Transfer motion between different subjects",
    icon: Move,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    borderColor: "border-violet-200 dark:border-violet-800",
    href: "/generate/motion"
  },
  {
    id: 8,
    title: "Train",
    description: "Train custom AI models for your specific needs",
    icon: GraduationCap,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800",
    href: "/generate/train"
  }
];

// Individual feature card component - keeps the card logic separate
function FeatureCard({ feature }: { feature: typeof generateFeatures[0] }) {
  const IconComponent = feature.icon;
  
  return (
    <a
      href={feature.href}
      className={`group relative block p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${feature.bgColor} ${feature.borderColor}`}
    >
      {/* Gradient background overlay on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Card content */}
      <div className="relative z-10">
        {/* Icon with gradient background */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
          <IconComponent className="h-6 w-6 text-white" />
        </div>
        
        {/* Title and description */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-200">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
          {feature.description}
        </p>
        
        {/* Open button - appears on hover */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
            Open
            <svg className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
    </a>
  );
}

// Main Generate Section component
export default function GenerateSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Generate
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Choose from our powerful AI tools to create amazing content. 
            Each tool is designed to help you bring your creative vision to life.
          </p>
        </div>

        {/* Features grid - responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {generateFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span className="flex items-center gap-2">
                <Wand2 className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                Explore All Tools
              </span>
            </button>
            
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200">
              View Documentation
            </button>
          </div>
          
          {/* Stats or additional info */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>All tools available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-1000" />
              <span>Real-time processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-2000" />
              <span>High-quality output</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}