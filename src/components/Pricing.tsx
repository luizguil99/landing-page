import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 29,
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Standard support',
      '5GB storage',
      'Basic integrations'
    ],
    cta: 'Start with Starter',
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: 79,
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      'Priority support',
      '20GB storage',
      'Advanced integrations',
      'Custom workflows'
    ],
    cta: 'Start with Professional',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      'Dedicated support',
      'Unlimited storage',
      'Premium integrations',
      'Custom workflows',
      'Advanced security',
      'API access'
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  }
];

const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The right price for your needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the perfect plan for your team size and requirements.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-lg shadow-lg divide-y divide-gray-200 ${tier.mostPopular ? 'border-2 border-indigo-500' : 'border border-gray-200'}`}>
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                {tier.mostPopular && (
                  <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 px-4 py-1 text-sm font-semibold text-white">
                    Most popular
                  </p>
                )}
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Billed annually (${tier.price * 10}/year)
                </p>
                <button
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                    tier.mostPopular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
