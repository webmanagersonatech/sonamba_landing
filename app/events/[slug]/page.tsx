import { eventsData } from "../../../data/eventdata";
import EventsDetailAnimated from "../../../components/EventsDetailAnimated";

// Generate static params for all events (for SSG / static export)
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

// Define the props interface for the page
interface EventsPageProps {
  params: { slug: string };
}

// Main page component
export default function EventsDetailPage({ params }: EventsPageProps) {
  const { slug } = params;

  // Find the event by slug
  const eventsItem = eventsData.find((event) => event.slug === slug);

  // Handle case if event not found
  if (!eventsItem) {
    return <p className="p-6">Event not found</p>;
  }

  // Render the event detail component
  return <EventsDetailAnimated eventItem={eventsItem} />;
}
