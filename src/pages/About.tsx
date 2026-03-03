import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Target, TrendingUp, Lightbulb } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const differentiators = [
  { icon: Target, title: "Data-Driven Approach", desc: "Every strategy is backed by analytics and measurable KPIs." },
  { icon: TrendingUp, title: "Proven Track Record", desc: "500+ keywords ranked and 200%+ average traffic growth." },
  { icon: Users, title: "Personalized Strategy", desc: "No cookie-cutter solutions — every plan is custom-built." },
  { icon: Lightbulb, title: "Transparent Reporting", desc: "Clear, honest reporting so you always know your ROI." },
];

const tools = [
  "Google Analytics", "Google Search Console", "Ahrefs", "SEMrush",
  "Screaming Frog", "Moz Pro", "Surfer SEO", "Google Tag Manager",
  "Google Ads", "Yoast SEO", "Schema Pro", "PageSpeed Insights",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Hi, I'm Savannah Marie</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              An experienced SEO Expert & Organic Growth Strategist based in Texas, helping businesses
              of all sizes achieve sustainable growth through search engine optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="aspect-[4/5] rounded-2xl bg-muted flex items-center justify-center">
                <img src="/profile.avif" alt="Savannah Marie" className="rounded-2xl w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">My Story</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                With years of experience in SEO and digital marketing, I've helped over 150 businesses
                transform their online presence. From small local shops to growing SaaS companies,
                my mission is to make organic search your most profitable marketing channel.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I specialize in Technical SEO, On-Page Optimization, Off-Page Strategies, and Local SEO.
                My approach combines deep technical knowledge with creative content strategy to deliver
                results that last.
              </p>

              <h3 className="mt-8 text-xl font-bold text-foreground">Mission</h3>
              <p className="mt-2 text-muted-foreground">
                To empower businesses with transparent, results-driven SEO that generates real revenue — not just vanity metrics.
              </p>

              <h3 className="mt-6 text-xl font-bold text-foreground">Vision</h3>
              <p className="mt-2 text-muted-foreground">
                A world where every business, regardless of size, can compete and win in organic search.
              </p>

              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Work With Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Why Choose Savannah</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <motion.div key={d.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 inline-flex rounded-full bg-secondary p-4 text-primary">
                      <d.icon size={28} />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{d.title}</h3>
                    <p className="text-sm text-muted-foreground">{d.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Certifications */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Tools & Certifications</h2>
            <p className="mt-4 text-muted-foreground">Industry-leading tools I use to deliver results.</p>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {tools.map((tool) => (
              <div key={tool} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm">
                <CheckCircle size={16} className="shrink-0 text-primary" />
                <span className="text-foreground">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
