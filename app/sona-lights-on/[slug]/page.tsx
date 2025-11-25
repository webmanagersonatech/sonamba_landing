import { eventsData } from "../../../data/eventdata";
import LightsonDetailAnimated from "../../../components/LightsOnDetailSection";

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

interface EventsPageProps {
  params: { slug: string };
}

export default function EventsDetailPage({ params }: EventsPageProps) {
  const { slug } = params;

  const eventsItem = eventsData.find((event) => event.slug === slug);

  if (!eventsItem) {
    return <p className="p-6">Event not found</p>;
  }
  return <LightsonDetailAnimated eventItem={eventsItem} />;
}
