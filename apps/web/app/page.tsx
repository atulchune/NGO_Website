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
import { MembershipCTA } from "@/components/sections/CTABanners";
import HowYouCanHelp from "@/components/sections/HowYouCanHelp";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

import { getHero, getContent, getEvents, getMedia } from "@/lib/api";

export default async function Home() {
  // Fetch all necessary data in parallel
  const [heroData, newsItems, blogItems, eventsList, liveVideoResponse] = await Promise.all([
    getHero(),
    getContent('NEWS', 6),
    getContent('BLOG', 3),
    getEvents(),
    getMedia('VIDEO', true, 1)
  ]);

  const liveVideo = liveVideoResponse?.data?.[0] || null;

  return (
    <>
      <Hero heroData={heroData} recentUpdates={newsItems?.data.slice(0, 4) || []} vpcfNews={newsItems?.data.slice(0, 2) || []} />
      <QuickAccess />
      <LiveKirtan liveVideo={liveVideo} />
      <DailyHukamnama />
      <AboutPreview />
      <KeyProjects />
      <LatestUpdates newsItems={newsItems?.data || []} blogItems={blogItems?.data || []} />
      <FeaturedMedia />
      <UpcomingEvents eventsList={eventsList.slice(0, 4)} />
      <Publications />
      <HowYouCanHelp />
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
