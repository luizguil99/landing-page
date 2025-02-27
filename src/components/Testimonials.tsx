import React from 'react';

const testimonials = [
  {
    content: "Implementing this platform has transformed our business operations. We've seen a 40% increase in productivity across all departments.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The analytics tools have given us insights we never had before. We're now making data-driven decisions that have improved our bottom line.",
    author: "Michael Chen",
    role: "CTO, InnovateCo",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The customer support team is exceptional. They've been responsive and helpful throughout our onboarding process and beyond.",
    author: "Emily Rodriguez",
    role: "Operations Manager, GlobalFirm",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="bg-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by businesses worldwide
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="relative text-lg font-medium text-gray-700 mb-6">
                  <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">{testimonial.content}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={testimonial.image} alt={testimonial.author} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
