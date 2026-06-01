"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/SectionHeading";
import {
  ArrowRight,
  ChevronDown,
  HeartPulse,
  Users,
  Award,
} from "lucide-react";
import projectsData from "@/data/projects.json";

const faqs = [
  {
    q: "How can I donate to a specific project?",
    a: "You can visit our Donate page and select the project you wish to support. Alternatively, contact us directly and we will guide you through a direct transfer.",
  },
  {
    q: "Are donations tax-deductible?",
    a: "Yes, all donations to Vapi Punjabi Charitable Foundation are eligible for tax deduction under Section 80G of the Income Tax Act.",
  },
  {
    q: "How do I become a volunteer?",
    a: "Fill out the contact form on our Contact page or reach us via WhatsApp. We will get you onboarded with our next activity drive.",
  },
  {
    q: "Can my company partner with your foundation?",
    a: "Absolutely! We welcome CSR partnerships. Please visit our CSR Partnerships page or contact us for a detailed proposal.",
  },
];

export default function ProjectsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Discover the initiatives transforming lives across Vapi and beyond."
      />

      {/* Intro */}
      <section id="intro" className="py-10 md:py-12 bg-background">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Each of our projects is designed to address a specific, pressing
            need within the community. From healthcare to education and
            financial empowerment — every initiative is backed by transparency,
            volunteer commitment, and measurable impact.
          </motion.p>
        </div>
      </section>

      {/* Project Sections */}
      {projectsData.map((project, index) => (
        <section
          key={project.id}
          id={project.id}
          className={`py-10 md:py-12 ${
            index % 2 === 0 ? "bg-slate-50" : "bg-background"
          }`}
        >
          <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={index % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {project.images[1] && (
                    <div className="absolute -bottom-6 -right-3 w-1/2 aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block relative">
                      <Image
                        src={project.images[1]}
                        alt={`${project.title} activity`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 0vw, 25vw"
                      />
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={index % 2 !== 0 ? "lg:order-1" : ""}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
                  {project.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-white rounded-xl p-4 shadow-md border border-slate-100 text-center"
                    >
                      <div className="text-xl md:text-2xl font-extrabold text-primary">
                        {value}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
                  >
                    <HeartPulse size={18} />
                    <span>Support This Project</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
                  >
                    <Users size={18} />
                    <span>Volunteer</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Donor Recognition */}
      <section
        id="donor-recognition"
        className="py-10 md:py-12 bg-gradient-to-r from-primary to-blue-800 text-white"
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 text-center">
          <Award className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Donor Recognition
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            We gratefully acknowledge every contribution. Donors receive
            official 80G tax-exemption certificates, acknowledgement plaques,
            and feature prominently in our annual impact report.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-xl"
          >
            <span>Become a Recognized Donor</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Volunteering */}
      <section id="volunteering" className="py-10 md:py-12 bg-background">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-1 bg-secondary rounded"></div>
                  <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">
                    Join Us
                  </h3>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-800 mb-6">
                  Become a Volunteer
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Whether you have medical expertise, teaching skills, or simply
                  a desire to help — we need you. Join our growing volunteer
                  family and make a tangible difference in someone&apos;s life.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Flexible time commitment",
                    "Training provided for all roles",
                    "Certificate of volunteering issued",
                    "Be part of a vibrant community",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
                >
                  <span>Apply to Volunteer</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="relative min-h-[300px]">
                <Image
                  src="/images/gallery/5.jpg"
                  alt="Volunteers at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-12 bg-slate-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-secondary rounded"></div>
              <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">
                Common Questions
              </h3>
              <div className="w-12 h-1 bg-secondary rounded"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-slate-800 text-lg pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`text-slate-500 shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 md:py-12 bg-gradient-to-r from-secondary to-orange-600 text-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Every Contribution Counts
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-10">
            Whether it&apos;s ₹100 or ₹1,00,000 — your support directly
            changes a life. Choose a project that resonates with you and be the
            change.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-white text-secondary px-10 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-xl"
          >
            <HeartPulse size={20} />
            <span>Donate Now</span>
          </Link>
        </div>
      </section>
    </>
  );
}
