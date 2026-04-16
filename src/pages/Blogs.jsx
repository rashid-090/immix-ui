import React from "react";
import { headerbg , DataCenterSecurityImg,SystemInfrastructureImg,StructuredCablingSolutionsImg} from "../assets";
import { Link } from "react-router-dom";

const Blogs = () => {
  // 1. Data Array
const blogData = [
  {
    id: 1,
    title: "Optimizing PUE: Strategies for Greener Data Centers",
    excerpt: "Learn how modern cooling techniques and AI-driven thermal management are driving Power Usage Effectiveness (PUE) toward 1.0.",
    image: DataCenterSecurityImg, 
    date: "Oct 12, 2023",
    slug: "optimizing-pue-strategies-for-greener-data-centers"
  },
  {
    id: 2,
    title: "Tier IV Certification: What It Means for Your Uptime",
    excerpt: "A deep dive into fault-tolerant infrastructure and why Tier IV standards are the gold standard for mission-critical operations.",
    image: SystemInfrastructureImg,
    date: "Nov 05, 2023"
    ,slug: "tier-iv-certification-what-it-means-for-your-uptime"
  },
  {
    id: 3,
    title: "Edge Computing and the Future of Low Latency",
    excerpt: "Discover how moving processing power closer to the end-user is revolutionizing IoT, autonomous vehicles, and real-time analytics.",
    image: StructuredCablingSolutionsImg,
    date: "Dec 01, 2023",
    slug: "edge-computing-and-the-future-of-low-latency"
  },
  
];

  return (
    <div className="bg-white text-black mt-[73px]">
      {/* --- HERO SECTION --- */}
      <section className="relative h-52 xl:h-60 flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${headerbg}')`,
            backgroundAttachment: "fixed",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="w-10/12 mx-auto relative text-white">
          <h2 className="text-3xl md:text-5xl">News & Updates</h2>
          <div className="mt-3 text-sm md:text-base">
            <span className="font-DMmono">
              <Link to="/" className="hover:text-primary-1">Home</Link> | Blog
            </span>
          </div>
        </div>
      </section>

      {/* --- BLOGS SECTION --- */}
      <section className="w-11/12 xl:w-10/12 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {/* 2. Map through the data */}
          {blogData.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              >
            <div 
              key={blog.id} 
              className="panel relative flex flex-col bg-white/80 backdrop-blur-sm border border-dashed border-gray-200 p-3 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden group rounded-lg">
                <img
                  className="object-cover w-full h-[250px] xl:h-[300px] transition-transform duration-700 group-hover:scale-110"
                  src={blog.image}
                  alt={blog.title}
                />
              </div>
              
              <div className="flex flex-col flex-grow">
                <h4 className="text-lg font-medium mt-4 line-clamp-1">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-600 pb-4 font-DMmono mt-2 line-clamp-1">
                  {blog.excerpt}
                </p>
                <div>
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="mt-5 inline-block rounded-md uppercase px-5 py-2 bg-primary-1 text-white text-[10px] font-DMmono hover:bg-primary-2 transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;