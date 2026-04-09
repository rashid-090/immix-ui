import React from "react";
import { headerbg } from "../assets";
import { Link } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const Careers = () => {
  const bgImage = headerbg;
  const jobs = [
    {
      id: 1,
      title: "Data Center Infrastructure Engineer",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "Responsible for maintaining high-availability cooling and power systems within Tier III data centers.",
    },
    {
      id: 2,
      title: "Cloud Solutions Architect",
      location: "London, UK",
      type: "Remote / Hybrid",
      description:
        "Designing future-adaptable cloud migrations and hybrid infrastructure for enterprise clients.",
    },
    {
      id: 3,
      title: "Senior Project Manager",
      location: "Singapore",
      type: "Contract",
      description:
        "Leading multi-continent infrastructure deployments with a focus on quality and long-sightedness.",
    },
    {
      id: 4,
      title: "Network Security Specialist",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time",
      description:
        "Ensuring the privacy and safety of client data through advanced perimeter defense strategies.",
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
            backgroundAttachment: "fixed", // This creates the "fixed" scroll effect
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="w-10/12 mx-auto relative text-white ">
          <h2 className="text-3xl md:text-5xl">Work With Us</h2>
          <div className="mt-3 text-sm md:text-base">
            <span className="font-DMmono">
              <Link to="/" className="hover:text-primary-1">
                Home
              </Link>{" "}
              | Careers
            </span>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20">
        <div className=" grid grid-cols-1 md:grid-cols-6 gap-y-10 gap-x-20">
          <div className="md:col-span-4 space-y-20">
            <div>
              <div>
                <h2 className="text-2xl md:text-4xl mb-2">Careers</h2>
                <div className="h-[3px] w-40 bg-gradient-to-r from-primary-1 to-transparent"></div>
              </div>
              <p className="font-DMmono mt-8 text-slate-600 md:text-justify leading-relaxed">
                At Immix technologies, we are committed to building a better
                working world. Work where you are inspired to explore your
                passions, where your talents are nurtured and cultivated because
                the world needs diverse and inclusive leaders who can embrace
                the change and transition it into opportunity. We at Immix
                technologies understand the power of technology and analytics
                and combine them with human empathy and insight for breathtaking
                results.
                <br /> <br />
                We invite you to explore careers at Immix technologies and gain
                the tools you need to keep learning and growing so that you are
                one step ahead and embrace challenges as opportunities.
              </p>
            </div>

            <div className="mb-12">
              <div>
                <h2 className="text-xl md:text-2xl mb-2">Open Positions</h2>
                <div className="h-[3px] w-40 bg-gradient-to-r from-primary-1 to-transparent"></div>
              </div>
              <p className="mt-4 text-slate-600 max-w-xl font-DMmono">
                Join a challenging team of experts and help us deliver the
                infrastructure answers the world needs to move forward.
              </p>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <div
                    key={job.id}
                    className="group h-full flex flex-col justify-between relative bg-slate-50 border border-slate-200 p-8 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-gray-100 shadow-sm text-primary-1 text-xs font-medium tracking-wider rounded-full">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="font-medium text-lg text-slate-900 mb-2 group-hover:text-primary-1 transition-colors">
                        {job.title}
                      </h3>

                      <div className="flex items-center gap-4 text-slate-500 text-xs mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.postedDate || "Recently"}
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm font-DMmono leading-relaxed mb-5 line-clamp-2">
                        {job.description}
                      </p>
                    </div>

                    <button className="flex items-center gap-2 bg-primary-1 text-white text-xs font-medium tracking-widest px-4 py-3 rounded-xl transition-all active:scale-95 w-fit shadow-md">
                      APPLY NOW
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>

                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary-1/10 rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity"></div>
                  </div>
                ))
              ) : (
                /* --- EMPTY STATE / GET IN TOUCH CARD --- */
                <div className="group col-span-1 md:col-span-2 flex flex-col items-center text-center justify-center relative bg-slate-50 border-2 border-dashed border-slate-200 p-12 rounded-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-1/10 text-primary-1 rounded-full flex items-center justify-center mb-6">
                    <Mail size={32} />
                  </div>

                  <h3 className="font-bold text-2xl text-slate-900 mb-2">
                    No Open Positions Currently
                  </h3>

                  <p className="text-slate-600 text-sm max-w-md leading-relaxed mb-8">
                    We are always looking for exceptional talent to join our
                    team across three continents. Send us your CV and we’ll get
                    in touch when a matching role opens up.
                  </p>

                  <button className="flex items-center gap-2 bg-primary-1 text-white text-xs font-medium tracking-widest px-8 py-4 rounded-xl transition-all active:scale-95 shadow-lg hover:shadow-primary-1/20">
                    GET IN TOUCH
                    <ArrowRight size={18} />
                  </button>

                  {/* Subtle background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-1/[0.02] to-transparent pointer-events-none"></div>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 md:sticky md:top-40 border space-y-5 border-dashed border-gray-300 p-5 h-fit">
            <div className="p-5 bg-gray-100 shadow-xl">
              <h4 className="font-medium mb-2 text-lg">how can we help you?</h4>
              <p className="font-DMmono text-sm">
                Reach out to our team if you have any query.
              </p>
              <button className="mt-4 bg-primary-1 text-white text-xs font-medium tracking-widest px-4 py-3 rounded-xl transition-all active:scale-95 w-fit shadow-md">
                GET A QUOTE
              </button>
            </div>
            <button className="flex items-center justify-center gap-2 bg-primary-1 text-white text-xs font-medium tracking-widest px-6 py-4  transition-all active:scale-95 w-full shadow-md">
              <FaRegFilePdf />
              COMPANY PROTFOLIO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
