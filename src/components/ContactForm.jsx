import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="bg-white py-10 xl:py-20">
      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className="space-y-8">
          <div className="inline-flex bg-gray-100 items-center gap-2 border border-gray-200 rounded-full px-3 py-2 pr-4">
            <div className="bg-primary-1 p-1.5 rounded-full text-white">
              <Mail size={14} />
            </div>
            <span className="text-black text-xs font-DMmono">Start A Project</span>
          </div>

          <h1 className="text-3xl md:text-5xl capitalize font-Inter text-slate-900 mb-5">
            Let's Build Your <br /> Digital Future
          </h1>

          <p className="text-sm font-DMmono text-gray-500 xl:w-[70%]">
            Ready to launch your next project? Fill out the form below or reach 
            out directly to start a conversation about your business needs 
            and how we can help you grow.
          </p>

          
        </div>

        {/* Right Column: Form Card */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-5 md:p-8 font-DMmono tracking-wider">
            <h1 className='font-Inter mb-5 text-2xl'>Get In Touch</h1>
          <form className="space-y-6 text-sm">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
              <input 
                type="text" 
                placeholder="Name"
                required
                className="w-full bg-gray-200 border-none rounded-lg px-4 py-3.5 placeholder-gray-600 focus:ring-2 focus:ring-primary-1 outline-none transition-all"
              />
            </div>

            <div>
              <input 
                type="email" 
                placeholder="Email"
                required
                className="w-full bg-gray-200 border-none rounded-lg px-4 py-3.5 placeholder-gray-600 focus:ring-2 focus:ring-primary-1 outline-none transition-all"
              />
            </div>

            <div>
              <input 
                type="tel" 
                placeholder="Mobile Number"
                required
                className="w-full bg-gray-200 border-none rounded-lg px-4 py-3.5 placeholder-gray-600 focus:ring-2 focus:ring-primary-1 outline-none transition-all"
              />
            </div>

            <div>
              <select required className="w-full bg-gray-200 border-none rounded-lg px-4 py-3.5 text-gray-700 focus:ring-2 focus:ring-primary-1 outline-none appearance-none transition-all">
                <option>Select Service</option>
                <option>New Website Design</option>
                <option>Data Center Solutions</option>
                <option>Cloud Infrastructure</option>
                <option>Network Security</option>
              </select>
            </div>

            <div className='md:col-span-2'>
              <textarea 
                rows="4"
                placeholder="How can we help?"
                className="w-full bg-gray-200 border-none rounded-lg px-4 py-3.5 placeholder-gray-600 focus:ring-2 focus:ring-primary-1 outline-none transition-all resize-none"
              ></textarea>
            </div>
            </div>

            <button 
              type="submit" 
              className="w-fit cursor-pointer uppercase bg-primary-1 hover:bg-primary-2 active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200 group"
            >
              Send Message
             
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;