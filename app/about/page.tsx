"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/SectionHeading";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  Users,
  BookOpen,
  Stethoscope,
  HandCoins,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We lead with empathy and genuine care for every individual we serve.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "Every rupee is accounted for. We maintain open books and regular audit reports.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously seek better, more impactful ways of serving our community.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We serve everyone regardless of caste, creed, gender, or religion.",
  },
];

const whatWeDo = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Free physiotherapy camps, medical emergency funding, and health check-up drives.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Girl-child education sponsorships, school supplies, and career mentoring.",
  },
  {
    icon: HandCoins,
    title: "Financial Aid",
    description:
      "Widow pension schemes, disaster relief, and family sustenance funds.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "Youth workshops, cultural events, and volunteer engagement programs.",
  },
];

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Learn about our mission, vision, and the people behind Vapi Punjabi Charitable Foundation."
      />

      {/* Intro */}
      <section id="intro" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/images/gallery/3.jpg"
                    alt="Foundation activities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl p-6 shadow-xl text-white">
                  <div className="text-3xl font-extrabold">10+</div>
                  <div className="text-sm font-medium">Years of Service</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-secondary rounded"></div>
                <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">
                  Our Story
                </h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
                Rooted in Service, Growing with{" "}
                <span className="text-primary">Purpose</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Established with a deep commitment to the well-being of the
                Vapi community, our foundation was born from the collective
                vision of local Punjabi families who wanted to give back.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                What started as a small group organising local health camps has
                now grown into a registered charitable trust managing
                multi-disciplinary community welfare programs across healthcare,
                education, and financial relief.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              id="vision"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center mb-6 shadow-lg">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                A society where every individual has access to quality
                healthcare, education, and the financial security needed to live
                with dignity — regardless of their socio-economic background.
              </p>
            </motion.div>

            <motion.div
              id="mission"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-secondary flex items-center justify-center mb-6 shadow-lg">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To create sustainable, community-driven programs that directly
                uplift underprivileged families through free healthcare,
                educational sponsorships, widow support, and emergency financial
                assistance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-secondary rounded"></div>
              <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">
                What Drives Us
              </h3>
              <div className="w-12 h-1 bg-secondary rounded"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center group hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon
                      className="text-primary group-hover:text-white transition-colors"
                      size={24}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-secondary rounded"></div>
              <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">
                Our Focus Areas
              </h3>
              <div className="w-12 h-1 bg-secondary rounded"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeDo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-6 bg-white rounded-2xl p-8 shadow-lg border border-slate-100 group hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shrink-0 shadow-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="join-us"
        className="py-24 bg-gradient-to-r from-primary to-blue-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Join us as a volunteer, donor, or CSR partner and become a part of
              the change you want to see in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-xl shadow-secondary/30"
              >
                <span>Join Our Mission</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1"
              >
                <span>Donate Today</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
