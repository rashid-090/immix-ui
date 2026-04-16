import React, { useRef, useState } from 'react';
import { Mail } from 'lucide-react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ContactForm = () => {
  const formRef = useRef(null);
  
  const initialState = {
    name: '',
    email: '',
    phone: '', 
    service: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value || '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "60173171211"; 

    // Formatting the message for WhatsApp
    const text = `*New Inquiry - From Immix Website*%0A%0A` +
                 `*Name:* ${encodeURIComponent(formData.name)}%0A` +
                 `*Email:* ${encodeURIComponent(formData.email)}%0A` +
                 `*Phone:* ${encodeURIComponent(formData.phone || '')}%0A` +
                 `*Service:* ${encodeURIComponent(formData.service)}%0A` +
                 `*Message:* ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');

    // Reset the form state immediately or after a delay
    setTimeout(() => {
      setFormData(initialState);
    }, 1000); 
  };
  
  return (
    <section className="bg-white py-10 xl:py-20">
      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <div className="inline-flex bg-gray-100 items-center gap-2 border border-gray-200 rounded-full px-1 md:px-3 py-1 md:py-2 pr-4">
            <div className="bg-primary-1 p-1.5 rounded-full text-white">
              <Mail size={14} />
            </div>
            <span className="text-black text-[10px] md:text-xs font-DMmono">Start A Project</span>
          </div>

          <h1 className="text-3xl md:text-5xl capitalize font-Inter text-slate-900 mb-5">
            Let's Build Your <br /> Digital Future
          </h1>

          <p className="text-sm font-DMmono text-gray-500 xl:w-[70%]">
            Ready to launch your next project? Fill out the form below or reach 
            out directly.
          </p>
        </div>

        <div className="bg-gray-100 border border-gray-200 rounded-lg p-5 md:p-8 font-DMmono tracking-wider">
          <h1 className='font-Inter mb-5 text-2xl'>Get In Touch</h1>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-sm">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name"
                  value={formData.name} // Added value for control
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-200 border-none rounded-lg px-4 py-3.5 placeholder-gray-600 focus:ring-2 focus:ring-primary-1 outline-none transition-all"
                />
              </div>

              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email"
                  value={formData.email} // Added value for control
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-200 border-none rounded-lg px-4 py-3.5 placeholder-gray-600 focus:ring-2 focus:ring-primary-1 outline-none transition-all"
                />
              </div>

              <div className="phone-input-container">
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Mobile Number"
                  required
                  className="flex w-full bg-gray-200 border-none rounded-lg px-4 py-1.5 focus-within:ring-2 focus-within:ring-primary-1 transition-all"
                  numberInputProps={{
                    className: "bg-transparent border-none outline-none w-full py-2 placeholder-gray-600" 
                  }}
                />
              </div>

              <div>
               <select 
                name="service"
                required 
                onChange={handleChange}
                value={formData.service}
                className="w-full bg-gray-200 border-none rounded-lg px-4 py-3.5 text-gray-700 focus:ring-2 focus:ring-primary-1 outline-none appearance-none"
              >
                <option value="" disabled>Select Service</option>
                <option value="Deployment & Implementation">Deployment & Implementation</option>
                <option value="Remote Hands & On-Site Technical Support">Remote Hands & On-Site Technical Support</option>
                <option value="Network Operations & Maintenance">Network Operations & Maintenance</option>
                <option value="Logistics, Procurement & Asset Management">Logistics, Procurement & Asset Management</option>
                <option value="Testing, Validation & Quality Assurance">Testing, Validation & Quality Assurance</option>
                <option value="Secure IT Asset Disposal & Data Destruction">Secure IT Asset Disposal & Data Destruction</option>
                <option value="Project Management & Service Delivery">Project Management & Service Delivery</option>
              </select>
              </div>

              <div className='md:col-span-2'>
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="How can we help?"
                  required // Added required for safety
                  onChange={handleChange}
                  value={formData.message}
                  className="w-full bg-gray-200 border-none rounded-lg px-4 py-3.5 placeholder-gray-600 focus:ring-2 focus:ring-primary-1 outline-none transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-fit cursor-pointer uppercase bg-primary-1 hover:bg-primary-2 active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        .PhoneInputCountry {
          margin-right: 8px;
        }
        .PhoneInputInput {
          background: transparent;
          border: none;
          outline: none;
          font-family: inherit;
          font-size: inherit;
        }
        .PhoneInput {
          --PhoneInputCountryFlag-borderColor: transparent;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;