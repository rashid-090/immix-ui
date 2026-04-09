import React from "react";
import { headerbg } from "../assets";
import { Link, useParams } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";
import {
  DataCenterSecurityImg,
  SystemInfrastructureImg,
  StructuredCablingSolutionsImg,
  CoLocationServicesImg,
  DataCenterMigrationImg,
  ManagedHostingImg,
} from "../assets";

  const allServices = [
    {
        slug: "data-center-security",
      title: "Data Center Security",
      img: DataCenterSecurityImg,
      description:
        "Protecting your data center is critical in today's landscape of advanced cyber threats.",
  
    },
    {
        slug: "system-infrastructure",
      title: "System Infrastructure",
      img: SystemInfrastructureImg,
      description:
        "At Immix Technologies, we design and maintain an integrated system infrastructure.",

    },
    {
        slug: "structured-cabling",
      title: "Structured Cabling",
      img: StructuredCablingSolutionsImg,
      description:
        "Immix Technologies delivers state-of-the-art structured cabling solutions.",
     
    },
    {
        slug: "co-location-services",
      title: "Co-Location Services",
      img: CoLocationServicesImg,
      description:
        "Immix Technologies operates high-end data centers worldwide.",
   
    },
    {
        slug: "data-center-migration",
      title: "Data Center Migration",
      img: DataCenterMigrationImg,
      description:
        "Expert team ensures seamless data center migrations, minimizing downtime.",
  
    },
    {
        slug: "managed-hosting",
      title: "Managed Hosting",
      img: ManagedHostingImg,
      description:
        "Offers fully managed hosting solutions, giving you secure access to hardware.",
   
    },
  ];

const ServicesInner = () => {
  const bgImage = headerbg;

const { slug } = useParams(); // Use useParams instead of useSearchParams

  // Find the specific service data based on the slug in the URL
  const service = allServices.find((item) => item.slug === slug);
  
  // Now console.log(service) should show your data!
  console.log(service); 

  if (!service) {
    return <div className="mt-40">Service not found!</div>;
  }

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
              <img className="mb-5" src={service.img} alt="" />
              <div>
                <h2 className="text-2xl md:text-4xl mb-2">{service.title}</h2>
                <div className="h-[3px] w-40 bg-gradient-to-r from-primary-1 to-transparent"></div>
              </div>
              <p className="font-DMmono mt-8 text-slate-600 leading-relaxed">
                {service.description}
              </p>
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

export default ServicesInner;
