import { useState } from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const categories = ["All", "SEO Tips", "Keyword Research", "Algorithm Updates", "Small Business SEO"];

const posts = [
  {
    title: "10 Technical SEO Fixes That Can Double Your Traffic",
    excerpt: "Discover the most impactful technical SEO improvements you can make today to dramatically improve your search rankings.",
    content: "Technical SEO is the foundation of any successful search strategy. From optimizing your site speed to ensuring proper indexing, these 10 fixes can have a massive impact on your visibility. We'll cover XML sitemaps, robots.txt optimization, canonical tags, and more. Implementing these changes accurately can often lead to a significant boost in rankings within weeks.",
    date: "Feb 28, 2026",
    category: "SEO Tips",
    readTime: "8 min"
  },
  {
    title: "The Complete Guide to Keyword Research in 2026",
    excerpt: "Learn how to find high-intent keywords that drive real revenue, not just traffic. A step-by-step framework.",
    content: "Keyword research is no longer just about finding high-volume terms. It's about understanding user intent and identifying the terms that lead to conversions. This guide features our proprietary 'Revenue-First' framework for keyword selection, including how to use AI tools for intent analysis and how to map keywords to different stages of the buyer journey.",
    date: "Feb 20, 2026",
    category: "Keyword Research",
    readTime: "12 min"
  },
  {
    title: "Google's March 2026 Core Update: What You Need to Know",
    excerpt: "Breaking down the latest algorithm update and what it means for your SEO strategy going forward.",
    content: "Google's latest core update has a strong focus on content quality and helpfulness. We've analyzed thousands of SERPs to understand which sites were hit and which ones gained. Key takeaways include the importance of E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) and the declining impact of AI-generated content that lacks human oversight.",
    date: "Feb 15, 2026",
    category: "Algorithm Updates",
    readTime: "6 min"
  },
  {
    title: "Local SEO for Small Businesses: A Complete Playbook",
    excerpt: "How to dominate local search results and attract customers in your area with proven local SEO strategies.",
    content: "For small businesses, local search is often the most important source of leads. This playbook covers everything from optimizing your Google Business Profile to building local citations and earning reviews. We also dive into the 'Map Pack' algorithm and how you can position your business to appear at the top of local results.",
    date: "Feb 10, 2026",
    category: "Small Business SEO",
    readTime: "10 min"
  },
  {
    title: "Why Your SEO Isn't Working (And How to Fix It)",
    excerpt: "Common SEO mistakes that are costing you rankings and traffic, plus actionable fixes you can implement today.",
    content: "If you're putting in the effort but not seeing results, you might be falling into common SEO traps. This article identifies the most frequent mistakes, such as targeting the wrong keywords, ignoring mobile experience, or having poor site architecture. We provide a step-by-step audit process to find and fix these issues.",
    date: "Feb 5, 2026",
    category: "SEO Tips",
    readTime: "7 min"
  },
  {
    title: "How to Build Quality Backlinks Without Cold Outreach",
    excerpt: "Creative link building strategies that attract natural, high-authority backlinks to boost your domain rating.",
    content: "Cold outreach can be exhausting and often yields low results. Instead, focus on building 'link magnets'—content that naturally attracts links. We explore strategies like original research, data visualization, and interactive tools that authority sites want to reference. Quality over quantity is the mantra for 2026 link building.",
    date: "Jan 28, 2026",
    category: "SEO Tips",
    readTime: "9 min"
  },
  {
    title: "Long-Tail Keywords: The Secret to Faster Rankings",
    excerpt: "Why long-tail keywords are the fastest path to page 1 and how to find the best ones for your business.",
    content: "While high-volume keywords are tempting, long-tail keywords often have less competition and higher conversion rates. We show you how to identify specific search queries that your target audience is using and how to create content that perfectly matches their needs. This strategy is especially effective for new websites.",
    date: "Jan 20, 2026",
    category: "Keyword Research",
    readTime: "8 min"
  },
  {
    title: "SEO Budget Guide for Small Businesses",
    excerpt: "How much should you invest in SEO? A realistic breakdown of costs and expected ROI for small businesses.",
    content: "Determining how much to spend on SEO can be difficult. This guide provides a framework for calculating your potential ROI based on industry benchmarks. We break down the costs of content creation, technical audits, and ongoing management, helping you make an informed decision for your business's growth.",
    date: "Jan 15, 2026",
    category: "Small Business SEO",
    readTime: "6 min"
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(null);
  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Insights & Tips</p>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">SEO Blog</h1>
            <p className="mt-6 text-lg text-muted-foreground">Actionable SEO insights to help your business grow.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <motion.div key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card
                  className="group h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary/30"
                  onClick={() => setSelectedPost(post)}
                >
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="mb-2 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
          <DialogContent className="max-w-2xl bg-background">
            {selectedPost && (
              <>
                <DialogHeader>
                  <div className="mb-2 flex items-center gap-3 border-b pb-4">
                    <Badge variant="secondary" className="px-3 py-1 text-xs">{selectedPost.category}</Badge>
                    <span className="text-sm font-medium text-muted-foreground">{selectedPost.readTime} reading time</span>
                  </div>
                  <DialogTitle className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {selectedPost.title}
                  </DialogTitle>
                  <p className="mt-2 text-sm text-muted-foreground">{selectedPost.date}</p>
                </DialogHeader>
                <div className="mt-6 space-y-6 overflow-y-auto max-h-[60vh] pr-2">
                  <div className="text-lg leading-relaxed text-foreground/90 font-medium italic border-l-4 border-primary pl-4 py-2 bg-primary/5">
                    {selectedPost.excerpt}
                  </div>
                  <div className="text-base leading-relaxed text-foreground whitespace-pre-line">
                    {selectedPost.content}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </Layout>
  );
};

export default Blog;
