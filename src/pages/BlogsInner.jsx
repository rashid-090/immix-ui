import React from "react";
import {
  headerbg,
  DataCenterSecurityImg,
  SystemInfrastructureImg,
  StructuredCablingSolutionsImg,
} from "../assets";
import { Link, useParams } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    title: "Optimizing PUE: Strategies for Greener Data Centers",
    excerpt:
      "Learn how modern cooling techniques and AI-driven thermal management are driving Power Usage Effectiveness (PUE) toward 1.0...",
    image: DataCenterSecurityImg,
    date: "Oct 12, 2023",
    slug: "optimizing-pue-strategies-for-greener-data-centers",
  },
  {
    id: 2,
    title: "Tier IV Certification: What It Means for Your Uptime",
    excerpt:
      "A deep dive into fault-tolerant infrastructure and why Tier IV standards are the gold standard for mission-critical operations...",
    image: SystemInfrastructureImg,
    date: "Nov 05, 2023",
    slug: "tier-iv-certification-what-it-means-for-your-uptime",
  },
  {
    id: 3,
    title: "Edge Computing and the Future of Low Latency",
    excerpt:
      "Discover how moving processing power closer to the end-user is revolutionizing IoT, autonomous vehicles, and real-time analytics...",
    image: StructuredCablingSolutionsImg,
    date: "Dec 01, 2023",
    slug: "edge-computing-and-the-future-of-low-latency",
  },
];

const BlogsInner = () => {
  const { slug } = useParams();
  const currentBlog = blogData.find((item) => item.slug === slug);

  // Filter out the current blog to show "Other Blogs" in the sidebar
  const otherBlogs = blogData.filter((item) => item.slug !== slug);

  if (!currentBlog) {
    return (
      <div className="mt-40 text-center text-2xl font-bold">
        Blog not found!
      </div>
    );
  }

  return (
    <div className="bg-white text-black mt-[73px]">
      {/* --- HERO SECTION --- */}
      <section className="relative h-52 xl:h-64 flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${headerbg}')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="w-10/12 mx-auto relative text-white">
          <h1 className="text-2xl md:text-3xl">{currentBlog.title}</h1>
          <div className="mt-3 text-sm font-DMmono">
            <Link to="/" className="text-gray-400 hover:text-white">
              Home
            </Link>{" "}
            |
            <Link to="/blog" className="text-gray-400 hover:text-white mx-2">
              Blog
            </Link>{" "}
            |<span className="text-white ml-1">Article</span>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT & SIDEBAR --- */}
      <section className="py-12">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT: MAIN ARTICLE (Col Span 2) */}
            <div className="lg:col-span-2">
              <div className="w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg mb-8">
                <img
                  src={currentBlog.image}
                  alt={currentBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                  Admin
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 tracking-widest  text-sm">
                  {currentBlog.date}
                </span>
              </div>

              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl mb-6">
                  {currentBlog.title}
                </h2>
                <p className="text-gray-600 md:text-lg font-DMmono mb-6">
                  {currentBlog.excerpt}
                </p>
              </article>
            </div>

            {/* RIGHT: SIDEBAR (Col Span 1) */}
            <div className="lg:col-span-1">
              <aside className="md:sticky top-24">
                <h3 className="text-xl md:text-2xl mb-6 border-b-2 border-primary-1 inline-block">
                  Recent Posts
                </h3>

                <div className="flex flex-col gap-4">
                  {otherBlogs.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group flex gap-3"
                    >
                      <div className="w-60 h-24 overflow-hidden rounded-xl">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-primary-1">
                          {post.date}
                        </span>
                        <h4 className="text-sm font-semibold leading-snug group-hover:text-primary-1 transition-colors mt-1">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Sidebar Call to Action or Newsletter */}
                 <div className="mt-10  md:sticky md:top-40 border space-y-5 border-dashed border-gray-300 p-5 h-fit">
                            <div className="p-5 bg-gray-100 shadow-xl">
                              <h4 className="font-medium mb-2 text-lg">how can we help you?</h4>
                              <p className="font-DMmono text-sm">
                                Reach out to our team if you have any query.
                              </p>
                              <button className="mt-4 bg-primary-1 text-white text-xs font-medium tracking-widest px-4 py-3 rounded-xl transition-all active:scale-95 w-fit shadow-md">
                                GET A QUOTE
                              </button>
                            </div>
                          
                          </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsInner;
