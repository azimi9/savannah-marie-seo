import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  Search, FileText, MapPin, BarChart3, Link2, PenTool, Settings, TrendingUp,
  Star, ArrowRight, CheckCircle, Users, Globe, Target
} from "lucide-react";
import { motion } from "framer-motion";
import { BookingModal } from "@/components/BookingModal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { icon: Settings, title: "Technical SEO", desc: "Site speed, crawlability & indexing optimization" },
  { icon: FileText, title: "On-Page SEO", desc: "Content, meta tags & internal linking" },
  { icon: MapPin, title: "Local SEO", desc: "Google Business Profile & local rankings" },
  { icon: BarChart3, title: "SEO Audit & Strategy", desc: "In-depth analysis & growth roadmap" },
  { icon: Search, title: "Keyword Research", desc: "High-intent keyword targeting" },
  { icon: Link2, title: "Link Building", desc: "Authority-boosting backlink strategies" },
  { icon: PenTool, title: "Content Optimization", desc: "SEO-driven content that converts" },
  { icon: TrendingUp, title: "Monthly Management", desc: "Ongoing optimization & reporting" },
];

const stats = [
  { value: "500+", label: "Keywords Ranked" },
  { value: "200%", label: "Avg Traffic Growth" },
  { value: "150+", label: "Clients Served" },
  { value: "98%", label: "Client Retention" },
];

const testimonials = [
  { name: "James Mitchell", role: "CEO, TechStart Inc.", quote: "Savannah doubled our organic traffic in just 4 months. Her strategic approach to SEO is unlike anything we've experienced before.", rating: 5 },
  { name: "Rachel Thompson", role: "Owner, Bloom Boutique", quote: "Our local search visibility skyrocketed. We went from page 3 to the top 3 in Google Maps. Incredible results!", rating: 5 },
  { name: "David Chen", role: "Marketing Director, GrowthLab", quote: "The ROI from Savannah's SEO work has been phenomenal. She truly understands search engines and user intent.", rating: 5 },
];

const caseStudies = [
  { title: "E-Commerce Store", before: "2,500", after: "15,000", metric: "Monthly Visitors", growth: "500%" },
  { title: "Local Service Business", before: "Page 5", after: "Top 3", metric: "Google Rankings", growth: "340%" },
  { title: "SaaS Company", before: "$5K", after: "$45K", metric: "Monthly Revenue from SEO", growth: "800%" },
];

const pricingPlans = [
  {
    name: "Starter SEO",
    price: "$1,499",
    period: "per month",
    description: "Perfect for small local businesses looking to establish a search presence.",
    features: [
      "Targeted Keyword Research",
      "On-Page Optimization (5 pages)",
      "Technical SEO Audit",
      "Google Business Profile Setup",
      "Monthly Progress Reporting",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Growth Engine",
    price: "$2,999",
    period: "per month",
    description: "Our most popular plan for businesses ready to dominate their competition.",
    features: [
      "Advanced Keyword Analysis",
      "Full On-Page Optimization",
      "Monthly Content Creation (2 posts)",
      "Authority Link Building",
      "Competitor Tracking",
      "Dedicated Project Manager",
    ],
    buttonText: "Book Free Audit",
    popular: true,
  },
  {
    name: "Market Leader",
    price: "Custom",
    period: "starting at $5k",
    description: "Enterprise-grade SEO strategy for national brands and large e-commerce stores.",
    features: [
      "Full-Scale SEO Strategy",
      "Aggressive Link Building",
      "Technical Scalability Audit",
      "Content Strategy & Production",
      "International SEO Support",
      "Priority Support (24/7)",
    ],
    buttonText: "Contact for Quote",
    popular: false,
  },
];

const aboutHighlights = [
  { icon: Target, label: "Data-driven strategies tailored to your niche" },
  { icon: TrendingUp, label: "Consistent, long-term organic growth" },
  { icon: Users, label: "Transparent reporting & open communication" },
  { icon: Globe, label: "Experience across local, national & global SEO" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
            >
              SEO Expert & Organic Growth Strategist
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Rank Higher. Get More Traffic.{" "}
              <span className="text-primary">Grow Faster.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              I help businesses dominate search results with proven SEO strategies
              that drive real, measurable growth. Let's turn your website into your
              #1 revenue channel.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <BookingModal>
                <Button size="lg">Book a Free SEO Audit</Button>
              </BookingModal>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get Strategy Call <ArrowRight size={16} /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <p className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">SEO Services That Drive Results</h2>
            <p className="mt-4 text-muted-foreground">Comprehensive search engine optimization tailored to your business goals.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="group h-full border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-secondary p-3 text-primary">
                      <service.icon size={24} />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute -inset-3 rounded-full border-2 border-primary/20" />
                <div className="absolute -inset-6 rounded-full border border-primary/10" />
                <img
                  src="/profile.avif"
                  alt="Savannah — SEO Expert"
                  className="relative h-72 w-72 rounded-full object-cover shadow-2xl ring-4 ring-primary/30 md:h-80 md:w-80"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary px-4 py-2 text-center shadow-lg">
                  <p className="text-lg font-bold text-primary-foreground">7+</p>
                  <p className="text-xs text-primary-foreground/80">Years Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Hi, I'm Savannah —<br />
                <span className="text-primary">Your SEO Growth Partner</span>
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                With over 7 years of hands-on SEO experience, I've helped startups, local businesses, and enterprise brands
                climb to the top of search results and stay there. I don't believe in cookie-cutter strategies — every
                campaign I build is rooted in data, tailored to your industry, and designed for lasting results.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                From technical audits to content strategy and link building, I handle every layer of SEO so you can focus
                on running your business.
              </p>
              <ul className="mt-8 space-y-3">
                {aboutHighlights.map((item, i) => (
                  <motion.li
                    key={item.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon size={16} />
                    </div>
                    <span className="text-sm text-foreground">{item.label}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/about">Learn More About Me <ArrowRight size={16} /></Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">What Clients Say</h2>
            <p className="mt-4 text-muted-foreground">Real results from real businesses.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Proven Results</h2>
            <p className="mt-4 text-muted-foreground">Real numbers from real client campaigns.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="overflow-hidden">
                  <div className="bg-primary p-4 text-center">
                    <p className="text-2xl font-bold text-primary-foreground">{cs.growth}</p>
                    <p className="text-xs text-primary-foreground/80">Growth</p>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{cs.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Before:</span>
                        <span className="font-medium text-foreground">{cs.before}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">After:</span>
                        <span className="font-medium text-primary">{cs.after}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Metric:</span>
                        <span className="font-medium text-foreground">{cs.metric}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link to="/case-studies">View All Case Studies <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Transparent Pricing</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Simple, Honest Plans</h2>
            <p className="mt-4 text-muted-foreground">
              No hidden fees. No long-term lock-ins. Just SEO that works.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full overflow-hidden transition-all hover:shadow-xl ${plan.popular
                      ? "border-primary shadow-lg ring-2 ring-primary/40"
                      : "border-border/50"
                    }`}
                >
                  {plan.popular && (
                    <div className="h-1 w-full bg-primary" />
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-6 flex items-end gap-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="mb-1 text-sm text-muted-foreground">/{plan.period}</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      {plan.popular ? (
                        <BookingModal>
                          <Button className="w-full" size="lg">{plan.buttonText}</Button>
                        </BookingModal>
                      ) : (
                        <Button
                          className="w-full"
                          size="lg"
                          variant="outline"
                          asChild
                        >
                          <Link to="/contact">{plan.buttonText}</Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Not sure which plan is right for you?{" "}
            <Link to="/contact" className="font-medium text-primary underline underline-offset-4 hover:no-underline">
              Book a free strategy call
            </Link>{" "}
            and I'll recommend the best fit.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Dominate Search Results?
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Get a free SEO audit and discover exactly how to outrank your competitors.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <BookingModal>
                <Button size="lg" variant="secondary">Book Your Free Audit</Button>
              </BookingModal>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Get Strategy Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;