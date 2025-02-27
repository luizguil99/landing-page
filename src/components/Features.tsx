import React from 'react';
import { Zap, Shield, BarChart, Users } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Our platform is optimized for speed, ensuring your team can work efficiently without delays.',
    icon: Zap,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-level security protocols keep your data safe and compliant with industry standards.',
    icon: Shield,
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain valuable insights with our comprehensive analytics and reporting tools.',
    icon: BarChart,
  },
  {
    name: 'Team Collaboration',
    description: 'Seamlessly work together with integrated collaboration features designed for modern teams.',
    icon: Users,
  },
];

const Features: React.FC = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides everything you need to streamline your workflow and boost productivity.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
