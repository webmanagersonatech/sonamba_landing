"use client";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const team = [
  // {
  //   role: "Team Head",
  //   name: "Senthil Kumar V.S",
  //   designation: "Assistant Professor",
  //   phones: ["+91 86674 66363", "+91 90804 85577"],
  //   emails: ["senthilkumar@sonabusinessschool.com"],
  //   image: "/images/faculty/senthil-kumar-mba.webp",
  // },
  {
    role: "Core Team",
    name: "Mr. U. Vigneshwar",
    designation: "Adhoc Faculty",
    phones: ["+91 81221 21294", "90804 85577"],
    emails: ["vigneshwar@sonabusinessschool.com"],
    image: "",
  },
];

export default function TeamContact() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm sm:text-base md:text-lg">Meet the people who guide and support placements</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-1 gap-8 max-w-5xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white border shadow-lg hover:shadow-2xl p-8 relative rounded-lg"
          >
            <div className="flex items-center  border justify-center w-24 h-24 mx-auto mb-6 rounded-full border-4 border-yellow-500 overflow-hidden
                            bg-gradient-to-br from-gray-200 via-gray-50 to-white">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-3xl font-bold text-maroon">
                  {member.name.charAt(0)}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-maroon">{member.name}</h3>
            <p className="text-gray-500">{member.designation}</p>
            <p className="text-yellow-500 font-semibold mt-2">{member.role}</p>

            <div className="mt-4 space-y-2 text-sm">
              {member.phones.map((phone, i) => (
                <p key={i} className="flex items-center justify-start text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-maroon" /> {phone}
                </p>
              ))}
              {member.emails.map((email, i) => (
                <p key={i} className="flex items-center justify-start text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-maroon" /> {email}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
