import React from "react";
import { Shield, FolderClock, Users, Lock, CheckCircle, Lightbulb } from "lucide-react";
import { CoLocationServicesImg, DataCenterSecurityImg, headerbg } from "../assets";
import { Link } from "react-router-dom";

const About = () => {
    const bgImage = headerbg;

  const values = [
    {
      title: "Integrity Properties",
      desc: "All our professionals strive to provide the best services while being supportive and building trust.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Long-Sightedness",
      desc: "Future-adaptable cloud and non-cloud services ensuring that you never go out of date.",
      icon: <FolderClock className="w-6 h-6" />,
    },
    {
      title: "Challenging Staff",
      desc: "Our team is our strength. Expert consultants and technicians providing high-end results.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Privacy and Safety",
      desc: "Capabilities enhanced by industry expertise to ensure a collaborative, secure approach.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Quality Services",
      desc: "We challenge conventional thinking to consistently deliver innovative, high-standard solutions.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Innovation Solutions",
      desc: "Working side by side with executives to provide innovative solutions around the globe.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-white text-black mt-[73px]">
      {/* --- HERO SECTION --- */}
      <section className="relative h-52 xl:h-60 flex flex-col justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundAttachment: 'fixed', // This creates the "fixed" scroll effect
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />

        </div>
          
          <div className="w-10/12 mx-auto relative text-white ">
            <h2 className="text-3xl md:text-5xl">The Story Behind Us</h2>
            <div className="mt-3 text-sm md:text-base">
              <span className="font-DMmono"><Link to="/" className="hover:text-primary-1">Home</Link> | About Us</span>
            </div>
          </div>

        
      </section>


      {/* --- ABOUT US SECTION --- */}
      <section className="py-10 xl:py-20 overflow-hidden font-DMmono">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-4xl mb-2">About Us</h2>
               <div className="h-[3px] w-40 bg-gradient-to-r from-primary-1 to-transparent"></div>
              <div className="space-y-3 mt-8">
                <p className=" leading-relaxed text-slate-700">
                  <span className="font-bold text-primary-1">
                    Immix Technologies
                  </span>{" "}
                  is a leading independent provider of specialist infrastructure
                  solutions and services for data centers.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Started operation in the Middle East in Early 2000s, we have
                  grown into a global powerhouse currently spread across three
                  continents. Our journey is defined by technical excellence and
                  a relentless focus on client success.
                </p>
                
              </div>
            </div>

            {/* Decorative Image/Stat box for "Modern" feel */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 overflow-hidden shadow-2xl">
                <img
                  src={DataCenterSecurityImg}
                  alt="Technology"
                  className="w-full h-60 xl:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-1 text-center text-white p-5 rounded-xl z-20 shadow-xl hidden md:block">
                <p className="text-4xl ">20+</p>
                <p className="text-xs opacity-80">
                  Years Experience
                </p>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES SECTION --- */}
      <section className="py-10 xl:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl mb-2">
                Our Core Values
              </h2>
               <div className="h-[3px] w-40 bg-gradient-to-r from-primary-1 to-transparent"></div>
            </div>
            <p className="text-slate-600 max-w-md font-DMmono">
              The principles that guide our specialized infrastructure solutions
              across three continents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-slate-200  hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-primary-1 mb-6 group-hover:bg-primary-1 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm font-DMmono">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
