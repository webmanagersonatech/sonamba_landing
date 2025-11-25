"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiCalendar } from "react-icons/fi";

interface Event {
    id: number;
    title: string;
    slug: string;
    description: string;
    date: string;
    image: string;
    sonalightson?: boolean;
}

export default function LightsOnEventsSection({ events }: { events: Event[] }) {
    const router = useRouter();

    // Filter events with `sonalightson: true`
    const lightsOnEvents = events.filter((e) => e.sonalightson);

    if (lightsOnEvents.length === 0) return null;

    return (
        <section className="w-full max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 sm:p-10  border border-gray-100 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 pointer-events-none" />


                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                    Experience inspiring leadership journeys through our{" "}
                    <span className="font-semibold text-maroon">Lights On</span> talks, where
                    thought leaders share stories of innovation, resilience, and growth.
                </p>

                {/* Grid of cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lightsOnEvents.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                            onClick={() => router.push(`/sona-lights-on/${event.slug}`)}
                            className="relative bg-white rounded-t-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                                {/* Date Badge */}
                                <div className="absolute top-3 left-3 bg-maroon text-white text-xs font-semibold px-3 py-1.5  shadow-md">
                                    <FiCalendar className="inline mr-1 text-yellow-400" />
                                    {new Date(event.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                    })}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col justify-between h-48">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-maroon transition-colors duration-300">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                                        {event.description.length > 80
                                            ? `${event.description.slice(0, 80)}...`
                                            : event.description}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="mt-4 text-sm font-semibold text-maroon flex items-center gap-1 group-hover:text-yellow-600 transition-colors"
                                >
                                    Read More
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>

    );
}
