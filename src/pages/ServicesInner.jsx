import React from "react";
import { headerbg } from "../assets";
import { Link, useParams } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";
import {
 Deployment,RemoteHands,NetworkOperations,Logistics,Testing,Secure,ProjectManagement,
} from "../assets";
import { ArrowUpFromDot } from "lucide-react";

const allServices = [
    {
    slug: "deployment-implementation",
    title: "Deployment & Implementation",
    img: Deployment,
    description:
      "We ensure seamless installation and commissioning of your infrastructure with precision and adherence to global standards.",
    points: [
      "Rack & Stack Implementation",
      "Server, Storage & Network Installation",
      "Structured Cabling (Fibre & Copper)",
      "Cross-connect Setup",
      "Power Connectivity & Initial Configuration",
      "DWDM & Optical Network Deployment",
    ],
  },
  {
    slug: "remote-hands-support",
    title: "Remote Hands & On-Site Technical Support",
    img: RemoteHands,
    description:
      "Reliable, real-time technical assistance delivered by experienced engineers — whenever and wherever you need it.",
    points: [
      "24/7 Remote Hands Support",
      "Smart Hands / On-site Support",
      "Remote Eyes Assistance",
      "On-demand Data Center Engineers",
      "Real-time Troubleshooting Support",
    ],
  },
  {
    slug: "network-operations",
    title: "Network Operations & Maintenance",
    img: NetworkOperations,
    description:
      "Proactive monitoring and expert support to ensure maximum uptime and performance.",
    points: [
      "Network Monitoring & Infrastructure Management",
      "Configuration, Upgrades & Change Management",
      "Preventive & Corrective Maintenance",
      "Break-Fix & Emergency Support",
      "Live Network Troubleshooting",
    ],
  },
  {
    slug: "logistics-asset-management",
    title: "Logistics, Procurement & Asset Management",
    img: Logistics,
    description:
      "Efficient global logistics and asset handling to support your infrastructure lifecycle.",
    points: [
      "Equipment Sourcing & Procurement",
      "Importer of Record (IOR) Services",
      "Shipping, Receiving & Last-Mile Delivery",
      "Inventory Management & Warehousing",
      "RMA Handling & Spare Parts Coordination",
      "Employer of Record (EOR) Services",
    ],
  },
  {
    slug: "testing-quality-assurance",
    title: "Testing, Validation & Quality Assurance",
    img: Testing,
    description:
      "Ensuring every deployment meets performance, compliance, and reliability standards.",
    points: [
      "Fibre & Network Testing",
      "Cable Audits & Certification",
      "Deployment Validation & Reporting",
      "Optical Network Audits",
    ],
  },
  {
    slug: "secure-it-disposal",
    title: "Secure IT Asset Disposal & Data Destruction",
    img: Secure,
    description:
      "Compliant and secure handling of end-of-life IT assets.",
    points: [
      "HDD/SSD Shredding (On-site & Off-site)",
      "Certified Data Destruction & Degaussing",
      "Asset Decommissioning & Disposal",
      "Secure Chain of Custody",
      "E-waste Disposal (Regulatory Compliant)",
      "Certificate of Destruction (CoD)",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management & Service Delivery",
    img: ProjectManagement,
    description:
      "End-to-end coordination ensuring smooth execution and accountability.",
    points: [
      "Site Readiness & Deployment Planning",
      "Vendor & Stakeholder Coordination",
      "SLA-based Service Delivery",
      "Centralized Ticketing & Reporting",
      "Dedicated Engineering Teams",
      "Documentation & Final Handover",
    ],
  },
  ];

const ServicesInner = () => {
  const bgImage = headerbg;

  const { slug } = useParams(); // Use useParams instead of useSearchParams

  // Find the specific service data based on the slug in the URL
  const service = allServices.find((item) => item.slug === slug);

  const otherServices = allServices.filter((item) => item.slug !== slug);

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
          <h2 className="text-2xl md:text-4xl">{service.title}</h2>
          <div className="mt-3 text-sm md:text-base">
            <span className="font-DMmono">
              <Link to="/" className="hover:text-primary-1">
                Home
              </Link>{" "}
              | Services
            </span>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="w-11/12 xl:w-10/12 mx-auto py-10">
        <div className=" grid grid-cols-1 md:grid-cols-6 gap-y-10 gap-x-10">
          <div className="md:col-span-4 space-y-20">
            <div>
              <img className="mb-5 h-[250px] md:h-[450px] w-full object-cover rounded-xl" src={service.img} alt="" />
              <div>
                <h2 className="text-2xl md:text-3xl mb-2">{service.title}</h2>
                <div className="h-[3px] w-40 bg-gradient-to-r from-primary-1 to-transparent"></div>
              </div>
              <p className="font-DMmono mt-5 text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-10">
                {service.points.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 mt-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-1 to-transparent" />
                    <p className="text-sm font-DMmono text-slate-600 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 md:sticky md:top-40 border space-y-5 border-dashed border-gray-300 p-5 h-fit">
            <h3 className="text-xl md:text-2xl mb-6 border-b-2 border-primary-1 inline-block">
              Recent Services
            </h3>

            <div className="flex flex-col gap-4">
              {otherServices.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group flex flex-col gap-3"
                >
                 
                  <div className="bg-primary-1 flex items-center gap-3 hover:bg-primary-2 text-white text-xs font-medium tracking-widest px-4 py-3  transition-all active:scale-95 w-full shadow-md">
                    <ArrowUpFromDot className="rotate-90 h-5" />
                    <h4 className="text-xs leading-snug  transition-colors mt-1 xl:pr-10">
                      {service.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>

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
