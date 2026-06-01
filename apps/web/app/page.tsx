import Hero from "@/components/sections/Hero";
import QuickAccess from "@/components/sections/QuickAccess";
import LiveKirtan from "@/components/sections/LiveKirtan";
import DailyHukamnama from "@/components/sections/DailyHukamnama";
import AboutPreview from "@/components/sections/AboutPreview";
import KeyProjects from "@/components/sections/KeyProjects";
import LatestUpdates from "@/components/sections/LatestUpdates";
import FeaturedMedia from "@/components/sections/FeaturedMedia";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import Publications from "@/components/sections/Publications";
import ImpactCounters from "@/components/sections/ImpactCounters";
import Testimonials from "@/components/sections/Testimonials";
import { MembershipCTA, DonationCTA } from "@/components/sections/CTABanners";
import HowYouCanHelp from "@/components/sections/HowYouCanHelp";
import ContactPreview from "@/components/sections/ContactPreview";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <LiveKirtan />
      <DailyHukamnama />
      <AboutPreview />
      <KeyProjects />
      <LatestUpdates />
      <FeaturedMedia />
      <UpcomingEvents />
      <Publications />
      <ImpactCounters />
      <Testimonials />
      <DonationCTA />
      <HowYouCanHelp />
      <ContactPreview />
      <WhatsAppButton />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            name: "Vapi Punjabi Charitable Foundation",
            url: "https://vapipunjabicharitablefoundation.org",
            logo: "https://vapipunjabicharitablefoundation.org/og-image.jpg",
            sameAs: [],
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Foundation House, Main Road",
              addressLocality: "Vapi",
              addressRegion: "Gujarat",
              postalCode: "396191",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-98765-43210",
              contactType: "customer service",
            },
          }),
        }}
      />
    </>
  );
}
