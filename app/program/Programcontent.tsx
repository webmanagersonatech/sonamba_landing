"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DiamondStar from "../../components/DiamondStar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MdHowToReg,
  MdHelpOutline,
  MdStar,
  MdWork,
  MdSchool,
  MdCardGiftcard,
  MdBusiness,
  MdPlaylistAddCheck,
  MdPeople,
  MdPhone,
  MdEmail,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdVerified,
} from "react-icons/md";

export default function ProgramPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  /** State & Refs */
  const [activeTab, setActiveTab] = useState("whysonamaba");
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /** Sections (Tabs) */
  const sections = [
    {
      id: "whysonamaba",
      title: "Why Sona MBA ",
      icon: MdHowToReg,
    },
    {
      id: "admission",
      title: "Admission",
      icon: MdSchool,
    },
    {
      id: "faq",
      title: "FAQs",
      icon: MdHelpOutline,
    },
  ];
  const highlights = [
    { icon: MdStar, text: "One of the top B-Schools in India" },
    { icon: MdWork, text: "Excellent Placement - Global/ Foreign placement" },
    { icon: MdCardGiftcard, text: "Scholarship for meritorious students" },
    { icon: MdPlaylistAddCheck, text: "Live projects" },
    { icon: MdBusiness, text: "Guidance for Family Business Management" },
    {
      icon: MdSchool,
      text: "Admission through MAT / CMAT / CAT / GMAT / TANCET",
    },
    {
      icon: MdPeople,
      text: "Mentors from Top Industries & academic bodies (IIMs, IITs)",
    },

  ];

  const program = [
    "Full Time Program",
    "CAPSTONE project",
    "Organisational study",
    "Foundation courses",
    "Affiliated to Anna University",
    "Approved by AICTE",
    "Accredited by NBA",
  ];


  const faqs = [
    {
      question:
        "What is the admission procedure in Sona School of Business & Management?",
      answer: `
      <div class="space-y-2">
        <p>
          The admission procedure for the MBA program is based on the following entrance tests:
          <span class="font-semibold"> MAT, CMAT, CAT, GMAT, and TANCET </span>
          conducted by professional bodies.
        </p>
        <p>
          Selection is followed by:
        </p>
        <ul class="list-disc list-inside space-y-1">
          <li>Written Admission Test (WAT)</li>
          <li>Group Discussion (GD)</li>
          <li>One Minute Extempore</li>
          <li>Psychometric Test</li>
          <li>Personal Interview</li>
        </ul>
      </div>
    `,
    },
    {
      question: "What is the application fee?",
      answer: `
      <div>
        <p>
          At Sona School of Business & Management, the entire application process for admissions is available online.
        </p>
        <p class="mt-2">
          Visit: 
          <a href="https://www.sonabusinessschool.com" target="_blank" class="text-maroon font-semibold underline">
            www.sonabusinessschool.com
          </a>
        </p>
      </div>
    `,
    },
    {
      question:
        "What is the flagship programme offered in Sona School of Business & Management?",
      answer: `
      <div>
        <p>
          The application fee for the MBA program is:
        </p>
        <ul class="list-disc list-inside space-y-1">
          <li>Rs. 650/- (Online Mode)</li>
          <li>Rs. 800/- (Offline Mode)</li>
        </ul>
      </div>
    `,
    },
    {
      question: "What are the distinguishing features of the MBA program?",
      answer: `
      <div>
        <p>
          Sona School of Business & Management offers two programs:
        </p>
        <ol class="list-decimal list-inside space-y-1">
          <li>MBA - General Management</li>
          <li>MBA - Industry Immersed Programme</li>
        </ol>
        <p class="mt-2">
          Both programs are approved by <span class="font-semibold">AICTE</span>, NBA accredited, affiliated to Anna University, 
          and the institution is <span class="font-semibold">NAAC "A" grade</span> accredited.
        </p>
      </div>
    `,
    },
    {
      question: "Do I need to apply separately for both the programs?",
      answer: `
      <div>
        <p>
          No, the application form is common for both programs. You can specify your choice of program in the form.
        </p>
      </div>
    `,
    },
    {
      question:
        "If my online application is successful, when will I expect a call for GD and interview?",
      answer: `
      <div>
        <p>
          Once we receive your application form, you will be notified and called for the interview process.
        </p>
      </div>
    `,
    },
    {
      question:
        "What is the Eligibility criteria & Selection Process for MBA program?",
      answer: `<div>
  <p><strong>Eligibility:</strong></p>
  <p>A candidate must meet <strong>either one</strong> of the following criteria:</p>

  <div className="pl-4">
    <p><strong>1. Regular Degree Pathway:</strong></p>
    <ul className="list-disc list-inside">
      <li>
        Qualified in any UGC-recognized Bachelor’s degree (any discipline) of
        minimum <strong>3 years duration</strong> under the
        <strong> 10 + 2 + 3 / 4 years pattern</strong>
        (i.e., 10th Std. + HSC + 3 years or 4 years degree program).
      </li>
      <li>
        Must have obtained <strong>First Class (I Class)</strong> in
        10th, 12th, and UG.
      </li>
    </ul>
  </div>

  <p className="mt-2 text-center font-semibold">OR</p>

  <div className="pl-4">
    <p><strong>2. Diploma Pathway:</strong></p>
    <ul className="list-disc list-inside">
      <li>
        Passed any recognized Bachelor’s degree (any discipline) of minimum
        <strong> 3 years duration</strong> under the
        <strong> 10 + 3 (Diploma) + 3 years pattern</strong>.
      </li>
      <li>
        Must have obtained <strong>First Class (I Class)</strong> in
        10th, Diploma, and UG.
      </li>
    </ul>
  </div>
</div>

    `,
    },
    {
      question: "What do I expect from a GD and Personal Interview?",
      answer: `
      <div class="space-y-2">
        Applicants are expected to be conversant in English language, analytical thinking, Knowledge of current affairs, clear SOP (statement of purpose) to pursue MBA, Leadership potential and a positive attitude.
      </div>
    `,
    },
    {
      question:
        "Through TANCET entrance test, what is the required cut off to apply for both the MBA programs?",
      answer: `
      <div>
        <p>
          The eligibility criteria for Management Quota seats through TANCET score is <span class="font-semibold">35 and above</span>.
        </p>
        <p>
          However, scores between 30–34 with relevant work experience and strong communication skills 
          may also be considered on a case-by-case basis.
        </p>
      </div>
    `,
    },
    {
      question:
        "Through CAT/MAT/GMAT/CMAT entrance tests, what is the required cut-off to apply for both the MBA programs?",
      answer: `
      <div>
        <ul class="list-disc list-inside space-y-1">
          <li>65 percentile for MAT/CMAT</li>
          <li>50 percentile for CAT</li>
        </ul>
      </div>
    `,
    },
    {
      question: "When can I contact office for admission related queries?",
      answer: `
      <div>
        <p>
          You are most welcome to contact between <span class="font-semibold">9.30 AM to 4.45 PM</span> on weekdays.
        </p>
        <p>
          Alternatively, you can mail us at: 
          <a href="mailto:admission@sonabusinessschool.com" class="text-maroon underline font-semibold">
            admission@sonabusinessschool.com
          </a>
        </p>
      </div>
    `,
    },
    {
      question: "If I have further queries, whom should I contact?",
      answer: `
    <div>
  <p>
    Please reach out to the <span className="font-semibold">Admissions Chair</span> 
    at Sona School of Business &amp; Management for further assistance.
  </p>
  <p className="mt-2">
    <span className="font-semibold">Mobile:</span> 9900016900 / 9894388426
  </p>
  <p>
    <span className="font-semibold">Office:</span> 0427 4099898, 0427 4099897
  </p>
</div>

    `,
    },
    {
      question: "Why should I choose Sona School of Business & Management?",
      answer: `
      <div>
  <p>
    With a <span className="font-semibold">58-year academic legacy</span> and a 
    <span className="font-semibold"> 40-acre green campus</span>, Sona School of Business &amp; Management 
    stands among the <span className="font-semibold">Top 100 B-Schools in India</span>. 
    The institution offers <span className="font-semibold">core faculty with rich academic and industry experience, 
    adjunct faculty from IIMs, IITs, foreign universities, and industry experts</span>. 
    Students benefit from <span className="font-semibold">internships, strong ROI (within 12 months), 
    hygienic hostels, Wi-Fi facilities, and merit scholarships</span>, ensuring 
    both quality education and excellent career outcomes.
  </p>
</div>

    `,
    },
    {
      question: "What are the reasons for choosing your MBA Program?",
      answer: `
     <div>
  <p className="font-semibold mb-2">The reasons to choose Sona MBA are as follows:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Balanced faculty mix with strong academic and industry experience.</li>
    <li>Excellent linkage with industry and corporate networks.</li>
    <li>Outstanding placement opportunities with a proven track record (2016 Highest National CTC: Rs. 7.1 LPA, Highest International CTC: Rs. 11.4 LPA).</li>
    <li>Exclusive teaching methodology: practical subjects, choice-based credit system, projects, field surveys, regular industry faculty interactions, add-on courses, value-added sessions, CEO interactions, and outbound training at Yercaud Hill Station & Play Factory.</li>
    <li>Value-added programs in emerging areas like Business Analytics, Finance, Marketing, HR, and Production.</li>
    <li>State-of-the-art facilities: separate national/international hostels for boys and girls (approx. Rs. 85,000/- per annum, twin-sharing), sports complex, music center, swimming pool, gym, badminton, tennis, 400m track, billiards, high-speed Wi-Fi, executive classrooms, scenic green campus, 12-hour library with premium books and business databases.</li>
    <li>Strong alumni network with excellent industry connections and high potential for lateral placements post-MBA.</li>
    <li>Urban campus at the heart of the city, surrounded by MSMEs and within 3 hours of 9 smart cities.</li>
    <li>Excellent connectivity via rail, road, and upcoming air routes from Chennai and Bangalore, available 24/7, 365 days a year.</li>
  </ul>
</div>

    `,
    },
    {
      question:
        "Mention some options for funding the free for the MBA programme?",
      answer: `
      <div>
        <p>
          We could recommend the self-financing companies or banks to provide educational loans for our students. Our students have obtained educational loans from various nationalized banks and private sector banks.  </p>
      </div>
    `,
    },
    {
      question: "How is the curriculum structured?",
      answer: `
     <div className="space-y-4">
  <p>
    The <span className="font-semibold">MBA programme</span> offered by Sona School of Business & Management, affiliated to 
    <span className="font-semibold"> Anna University</span>, is dedicated to guiding young minds to become dynamic, industry-ready, and highly sought-after management graduates. 
    The program is designed to groom students for employability while empowering and encouraging them to evolve as entrepreneurs. 
    The MBA program spans <span className="font-semibold">two years</span>, comprising <span className="font-semibold">six trimesters</span>.
  </p>

  <h3 className="text-xl font-semibold text-maroon mt-4">SSOM Model</h3>
  <p>
    The two-year MBA program begins with a <span className="font-semibold">five-day orientation</span> focusing on soft skills such as behavioral skills, problem solving, and communication, while providing a common learning platform for students from varied academic backgrounds.
  </p>
  <p>
    SSOM emphasizes <span className="font-semibold">student-centered learning</span> using pedagogical tools like case studies, storytelling, role play, simulations, team projects, problem-solving sessions, industry speakers/visitors, and inquiry-based learning. 
    A distinguishing feature of SSOM is its focus on <span className="font-semibold">social commitment and ethical decision-making</span> in management.
  </p>

  <h3 className="text-xl font-semibold text-maroon mt-4">Curriculum Structure</h3>

  <h4 className="font-semibold mt-2">First Year</h4>
  <p>
    The first-year courses build a strong foundation in disciplines such as economics, organizational behavior, and management. Students are introduced to management areas including Business Analytics, Finance, Marketing, Human Resources, Operations, and Systems, spread over three trimesters. 
    The curriculum balances academic rigor with practical learning, develops communication skills, boosts confidence, and enhances placement prospects.
  </p>
  <p>
    At the end of the first year, students undergo a <span className="font-semibold">4-week internship</span> in an organization to gain insights into organizational structure, processes, and real-time problem-solving. This helps in selecting suitable electives for the second year.
  </p>

  <h4 className="font-semibold mt-2">Second Year</h4>
  <p>
    The second year offers electives in Business Analytics, Finance, Marketing, HR, Production, and Family Business, guided by corporate and academic experts. These electives focus on applying theory, tools, and techniques in practical business settings and provide updated knowledge in specialized areas.
  </p>
  <p>
    Students are encouraged to engage in a <span className="font-semibold">Capstone project or real-time problem-solving</span> with an organization full-time at the end of the second year, adding significant value and enhancing placement opportunities.
  </p>
</div>

    `,
    },
    {
      question: "What is the pedagogy at Sona School of Business & Management?",
      answer: `
      <div>
        <p>
         To foster analytical thinking, creativity, effective communication and problem solving among students and to prepare them to take on business challenges, our team of faculty member's use variety of impactful teaching methods such as case studies, internships, lectures from eminent personalities, summer projects, Capstone/live projects and activity based learning methods. We have a training centre located at the hill station "Yercaud" built for the purpose of training students and corporate executives in the areas of leadership, communication and team work </p>
      </div>
    `,
    },
    {
      question: "What are the facilities are available at the campus?",
      answer: `
      <div>
       The campus is well-connected with Wi-Fi, state-of-the-art computer centre, well equipped class rooms and learning resource center with a huge collection of online and off-line learning resources such as books, journals, magazines and news dailies.
      </div>
    `,
    },
    {
      question: "What is the process for getting campus accommodation?",
      answer: `
      <div>
        <p>
         If you wish to stay in the campus accommodation, all you need is to bring your valid proof of admission for MBA program and place a request to the administrative office of the hostels for campus accommodation.  </p>
      </div>
    `,
    },
    {
      question: "What facilities are available in the campus accommodation?",
      answer: `
<div class="space-y-6">
The campus accommodation is well connected with Wi-Fi, Unique State-of-the-art Apple Lab, Gym, swimming pool, Billiards Court and outdoor facilities for sports, recreation hall, 24/7 power and water supply are some of the salient features of our hostel.
</div>
`,
    },
    {
      question:
        "In which Business sectors students get Placements in Sona School of Business & Management?",
      answer: `
<div class="space-y-6">
  <h3 class="text-xl font-semibold text-maroon mb-2">Spread of Sectors Engaged</h3>
  <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 list-disc list-inside">
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Agro</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">BFSI</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Constructions</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Consultancy</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Education</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Entertainment</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">FMCG</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Food Processing</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Health Care</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Hotels</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">IT</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Logistics</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Manufacturing</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Media</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Mining</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">NBFC</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Retail</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Telecommunications</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Textile</li>
  </ul>

  <h3 class="text-xl font-semibold text-maroon mb-2">Electives Provided</h3>
  <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 list-disc list-inside">
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Finance</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Human Resources</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Marketing</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">Production</li>
    <li class="bg-gray-100 px-3 py-1 rounded shadow-sm text-sm text-center">General Management</li>
  </ul>
</div>
`,
    },
  ];

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const generalProgramFeatures = [
    "Value added programs",
    "Visiting faculty from top tiered institutions and organizations",
    "Good placement opportunities",
    "International Tour (optional)",
    "50% of the allocated seats belongs to Govt. reserved quota",
  ];

  /** Banner Images */
  const tabImages: Record<string, string> = {
    whysonamaba:
      "/images/banner/program-banners/whysonamaba.webp",
    admission:
      "/images/banner/program-banners/admission.webp",
    faq: "/images/banner/program-banners/faq.png",
  };

  /** Load tab from URL */
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && sections.some((s) => s.id === tab.toLowerCase())) {
      setActiveTab(tab.toLowerCase());
    }
  }, [searchParams]);

  /** Tab change handler */
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.replace(`/program?tab=${tabId}`);
  };

  const currentSection = sections.find((s) => s.id === activeTab);

  useEffect(() => {
    if (!currentSection) return;

    const tabId = currentSection.id;

    // Document title
    document.title = `Program | ${currentSection.title} | Sona School of Business and Management`;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = `Details about the ${currentSection.title} program at Sona School of Business and Management.`;

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = `https://www.sonabusinessschool.com/program?tab=${tabId}`;
  }, [currentSection]);


  return (
    <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">
      {/* ================= Banner ================= */}
      <div className="w-full relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={tabImages[activeTab]}
            src={tabImages[activeTab] || ""}
            alt="Corporate Banner"
            className="w-full h-auto max-h-96 object-contain"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Banner Text & Breadcrumb */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
            {currentSection?.title}
          </h1>

          <div className="mt-3 sm:mt-4 w-full">
            <nav
              className="flex flex-wrap text-white text-xs sm:text-sm md:text-base"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex flex-wrap items-center space-x-1 sm:space-x-2">
                {/* Home */}
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="hover:text-maroon cursor-pointer transition-colors text-white"
                  >
                    Home
                  </Link>
                  <span className="text-white mx-1">{">"}</span>
                </li>

                {/* About */}
                <li className="inline-flex items-center">
                  <Link
                    href="/program"
                    className="hover:text-maroon cursor-pointer transition-colors text-white"
                  >
                    Program
                  </Link>
                  <span className="text-white mx-1">{">"}</span>
                </li>

                {/* Current Section */}
                <li className="inline-flex items-center text-yellow-500 font-semibold">
                  {currentSection?.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* ================= Tabs ================= */}
      <div className="w-full relative border-b border-gray-300 mt-6">
        <div
          ref={containerRef}
          className="relative flex flex-wrap justify-center gap-2 sm:gap-4 w-full max-w-7xl mx-auto px-2 sm:px-0"
        >
          {sections.map((sec, index) => {
            const Icon = sec.icon;
            const isActive = activeTab === sec.id;

            return (
              <button
                key={sec.id}
                ref={(el) => {
                  tabsRef.current[index] = el;
                }}
                onClick={() => handleTabChange(sec.id)}
                className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-500 transform ${isActive
                  ? "text-maroon scale-105"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
              >
                {/* Icon */}
                <Icon
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${isActive ? "text-maroon" : "text-gray-500"
                    }`}
                />

                {/* Text wrapper with underline + arrow */}
                <span className="relative flex flex-col items-center">
                  <span>{sec.title}</span>

                  {/* Underline */}
                  <span
                    className={`block h-0.5 bg-maroon transition-all duration-500 rounded-full ${isActive ? "w-full" : "w-0"
                      }`}
                  ></span>

                  {/* Arrow */}
                  {isActive && (
                    <span
                      className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-maroon -mt-px"
                    ></span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= Content Section ================= */}
      <div className="w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {activeTab === "whysonamaba" && (
            <motion.section
              key="whysonamaba"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative bg-white rounded-xl p-6 sm:p-10 md:p-14 max-w-7xl mx-auto text-gray-800 overflow-hidden shadow-lg"
            >
              {/* Highlights - Full Width */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-10 w-full"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                {highlights.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-3 p-3 bg-maroon/10 hover:bg-maroon/20 transition-colors shadow-md rounded-lg"
                  >
                    <Icon className="h-6 w-6 text-maroon" />
                    <span className="text-gray-800 font-medium text-sm">{text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Two Column Layout: Left = Paragraphs, Right = Program Features */}
              <div className="grid md:grid-cols-2 gap-10 items-start md:items-stretch">
                {/* Left Column - Paragraphs */}
                <div className="flex flex-col justify-start space-y-6">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-gray-700 text-base leading-relaxed text-justify"
                  >
                    Our MBA program is designed to provide a comprehensive learning
                    experience, blending academic rigor with practical industry
                    exposure. Students will gain skills in management, leadership, and
                    strategic thinking, preparing them for a successful career.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-gray-700 text-base leading-relaxed text-justify"
                  >
                    The curriculum includes live projects, guidance for family business
                    management, and mentorship from top industry leaders and
                    academicians, including IIMs and IITs. Students are also exposed to
                    international perspectives and real-world case studies.
                  </motion.p>
                </div>

                {/* Right Column - Program Features */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                  className="space-y-4"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-maroon mb-4 border-b-4 border-yellow-500 inline-block pb-2">
                    Program Features
                  </h3>
                  {/* Program Features - Two Column Layout */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      program.slice(0, 3), // first 3 programs
                      program.slice(3, 6), // next 3 programs
                    ].map((group, colIndex) => (
                      <ul key={colIndex} className="space-y-3">
                        {group.map((item, i) => (
                          <motion.li
                            key={i}
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <MdVerified className="h-4 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    ))}
                  </div>

                </motion.div>
              </div>
            </motion.section>
          )}


          {activeTab === "admission" && (
            <motion.section
              key="admission"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative bg-white rounded-xl p-6 sm:p-10 md:p-14 max-w-7xl mx-auto text-gray-800 overflow-hidden shadow-lg space-y-10"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-maroon border-b-4 border-yellow-500 inline-block pb-2"
              >
                Admission
              </motion.h2>

              {/* Eligibility Section */}
              <motion.div
                className="flex flex-col md:flex-row items-center gap-6 relative"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {/* Left Eligibility */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 bg-maroon/10 p-6 shadow-inner text-justify "
                >
                  <h3 className="text-xl font-semibold text-maroon mb-2">
                    Eligibility
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-2">
                    A Pass in any recognized Bachelor’s Degree (in any
                    Discipline) of minimum 3 years duration with 10 + 2 + 3 / 4
                    years pattern (ie. 10th Std. + HSC + 3 or 4 years Degree
                    Programme) and obtained 50% (45% for reserved category) at
                    the qualifying examination as per AICTE norms.
                  </p>
                </motion.div>

                {/* OR Circle */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <span className="bg-gray-200 text-gray-700 font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg md:text-xl shadow-md">
                    OR
                  </span>
                </motion.div>

                {/* Right Eligibility */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex-1 bg-blue-500/20 p-6 shadow-inner text-justify "
                >
                  <h3 className="text-xl font-semibold text-maroon mb-2">
                    &nbsp;
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-2">
                    &nbsp;
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    A pass in any recognized Bachelor’s Degree of minimum 3
                    years duration with 10 + 3 (Diploma) + 3 years Pattern and
                    obtained 50% (45% for reserved category) at the qualifying
                    examination as per AICTE norms.
                  </p>
                </motion.div>
              </motion.div>

              {/* Programs Offered Section */}
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {[
                  {
                    title: "General Program",
                    features: generalProgramFeatures,
                    link: "https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589",
                    buttonText: "Apply Now",
                    bgColor: "bg-blue-500/20",
                  },
                  {
                    title: "Foreign Nationals / PIO",
                    description:
                      "Criteria: 15% of the allocated seats. Must have first class in 10th, 12th and UG Degree. Wholesome team personality is expected.",
                    link: "https://www.sonatech.ac.in/admission/fn-students-admission.php",
                    buttonText: "Online Registration",
                    bgColor: "bg-maroon/10",
                  },
                ].map((program, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`${program.bgColor} p-6 shadow-inner text-justify flex flex-col justify-between`}
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-maroon mb-2">
                        {program.title}
                      </h3>
                      {program.description && (
                        <p className="text-gray-700 leading-relaxed mb-4">{program.description}</p>
                      )}
                      {program.features && (
                        <ul className="list-none space-y-1 mb-4">
                          {program.features.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center mt-4 px-4 py-2 bg-maroon text-white font-semibold rounded-lg hover:bg-maroon/90 hover:scale-105 transition-all duration-300 w-max"
                    >
                      {program.buttonText} <span className="ml-2">→</span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>



              {/* Foreign Nationals & Contact */}
              <motion.div
                className="grid  gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {/* Foreign Nationals */}


                {/* Contact */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-blue-500/20 p-6 shadow-inner text-justify space-y-4 "
                >
                  <h3 className="text-xl font-semibold text-maroon mb-2">
                    Contact Details
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Admission Cell,
                    <br />
                    Sona School of Business & Management,
                    <br />
                    Sona Nagar, Salem - 636 005, Tamil Nadu, INDIA
                  </p>

                  <div className="flex items-center gap-2 text-gray-700">
                    <MdPhone className="w-5 h-5 text-maroon/80 flex-shrink-0" />
                    <span>
                      <a href="tel:9900016900"> 9900016900</a> /
                      <a href="tel:94896000283"> 94896000283</a>

                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <MdPhone className="w-5 h-5 text-maroon/80 flex-shrink-0" />
                    <span>
                      Office: <a href="tel:04274099898"> 0427-4099898</a> /
                      <a href="tel:04274099897"> 0427-4099897</a>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <MdEmail className="w-5 h-5 text-maroon/80 flex-shrink-0" />
                    <span>
                      <a href="mailto:admission@sonabusinessschool.com">
                        admission@sonabusinessschool.com
                      </a>
                    </span>
                  </div>
                </motion.div>

              </motion.div>
            </motion.section>
          )}

          {activeTab === "faq" && (
            <motion.section
              key={activeTab}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative bg-white rounded-xl p-6 sm:p-10 md:p-14 max-w-7xl mx-auto text-gray-800 shadow-lg space-y-4"
            >
              <h2 className="text-2xl font-bold text-center text-maroon mb-6">
                Frequently Asked Questions
              </h2>

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-2 last:border-none"
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex justify-between items-center text-left text-gray-900 font-semibold py-3 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {activeIndex === index ? (
                      <MdKeyboardArrowUp className="w-6 h-6 text-maroon" />
                    ) : (
                      <MdKeyboardArrowDown className="w-6 h-6 text-maroon" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden text-gray-700 text-base pl-4"
                      >
                        <div
                          className="py-2 prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
