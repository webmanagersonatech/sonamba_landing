import { eventsData } from "../../../data/eventdata";
import EventsDetailAnimated from "../../../components/EventsDetailAnimated";
import type { Metadata } from "next";

// Generate static params for all events (SSG)
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

interface EventsPageProps {
  params: { slug: string };
}

// ⭐ Properly Typed Metadata (NO TS ERRORS)
export async function generateMetadata(
  { params }: EventsPageProps
): Promise<Metadata> {
  const event = eventsData.find((e) => e.slug === params.slug);

  if (!event) {
    return {
      title: "Event Not Found | Sona School of Business and Management",
    };
  }

  return {
    title: `Events | ${event.title} | Sona School of Business and Management`,
    description: event.description?.slice(0, 150),

    openGraph: {
      title: event.title,
      description: event.description?.slice(0, 200),
      url: `https://www.sonabusinessschool.com/events/${event.slug}`,
      type: "article",
      images: [
        {
          url: event.image,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description?.slice(0, 200),
      images: [event.image],
    },
  };
}

// Main page
export default function EventsDetailPage({ params }: EventsPageProps) {
  const eventItem = eventsData.find((event) => event.slug === params.slug);

  if (!eventItem) {
    return <p className="p-6">Event not found</p>;
  }

  return <EventsDetailAnimated eventItem={eventItem} />;
}
