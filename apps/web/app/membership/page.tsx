import MembershipHero from "@/components/membership/MembershipHero";
import WhyMembershipMatters from "@/components/membership/WhyMembershipMatters";
import WhyBecomeMember from "@/components/membership/WhyBecomeMember";
import MembershipCategories from "@/components/membership/MembershipCategories";
import MembershipProcess from "@/components/membership/MembershipProcess";
import ApplicationRequirements from "@/components/membership/ApplicationRequirements";
import MemberResponsibilities from "@/components/membership/MemberResponsibilities";
import MembershipForm from "@/components/membership/MembershipForm";
import MembershipFAQ from "@/components/membership/MembershipFAQ";
export const metadata = {
  title: "Membership | Vapi Punjabi Charitable Foundation",
  description: "Become a member of the Vapi Punjabi Charitable Foundation. Join hands, build community, and create a lasting impact.",
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <MembershipHero />

      {/* 2. Why Membership Matters */}
      <WhyMembershipMatters />

      {/* 3. Why Become a Member (Value Proposition) */}
      <WhyBecomeMember />

      {/* 4. Membership Categories / Pricing */}
      <MembershipCategories />

      {/* 5. Process Timeline */}
      <MembershipProcess />

      {/* 6. Requirements & Responsibilities (Side by Side) */}
      <section className="py-10 md:py-12 bg-slate-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ApplicationRequirements />
            <MemberResponsibilities />
          </div>
        </div>
      </section>

      {/* 7. Application Form */}
      <section className="py-10 md:py-12 bg-white" id="apply">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 max-w-[800px]">
          <MembershipForm />
        </div>
      </section>

      {/* 8. FAQ */}
      <MembershipFAQ />

    </main>
  );
}
