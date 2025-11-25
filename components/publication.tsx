"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DiamondStar from "./DiamondStar";

const publications = {
    "2020-2021": [
        "Dr. P.Praba Devi (21-Apr). Customers Perception towards Vending machines: A Prelude and Social Media Marketing: A Review. Proceeding on Turkish Journal of Physiotherapy and Rehabilitation – SCOPUS, Volume 32, Issue 3.",
        "Dr.D.Ganesan (21-Apr). An empirical study on efficacy of infomercials on consumers' purchase intention on wellness products. Proceeding on Turkish Journal of Physiotherapy and Rehabilitation – SCOPUS, 32(2), 3453-3460.",
        "Umaya Salma Shajahan (21-Apr). Working Capital Management and its impact on Profitability of selected Pharmaceutical companies in India. Proceeding on Turkish Journal of Physiotherapy and Rehabilitation – SCOPUS, 32(3), 4328-4337.",
        "Dr. P.Praba Devi (Mar-21). Social Media Marketing: A Review and THE CASE OF WEWORK – RISE & FALL. Proceeding on Strad Research-WOS, Volume 8, Issue 3, 2021. Impact factor 6.1.",
        "Dr.D.Ganesan (Mar-21). THE CASE OF WEWORK – RISE & FALL. Proceeding on International Journal of Multidisciplinary Educational Research, 10, 2(5), 127-132. Impact factor 6.514.",
        "N.Nithya (Mar-21). Influence of TV Ads and Child Responsiveness on the Buying Behavior of Parents – A Study on Consumer Psychology of Children. Proceeding on Strad Research, 244-257.",
        "Jothi Francina, V. Vaishnavi.M, Revathi, and Sathishkumar (Dec 2020). Consumer Attitude and Purchase Behavior of Natural and Wellness Food Product. Proceedings on International Virtual Conference on ASTMLS 2020, Sona College of Technology.",
        "Ganesan D., Jothi Francina, V., and Hariram (Dec 2020). A Study on Service Quality Effectiveness of Co-operative Bank towards Customers in Salem. Proceedings on International Virtual Conference on ASTMLS 2020, Sona College of Technology.",
        "Jothi Francina, V., Selvavinayagam, K., and Surya Vimal S.P (Nov 2020). Smart Logistics Employing Sensors and Embedded Logistics Systems Contentment. International Conference on Signals, Communication and Embedded Systems, Global Technology Forum 2020 Proceedings, ISBN: 978937760-5-6, 111-115.",
        "Dr.S.Sathyakala (Nov 2020). Investment Policy Analysis of Commercial Bank in Nepal. Turkish Journal of Physiotherapy and Rehabilitation.",
        "Dr.P.K.Anjani (Nov 2020). The impact of COVID-19 on workforce in information technology sector. European Journal of Molecular & Clinical Medicine.",
        "Umaya Salma Shajahan, Dr.S.Sathyakala (Nov 2020). How Blockchain Technology Might Shape Financial Services. International Conference on Signals, Communication and Embedded Systems.",
        "Ganesan D., Jothi Francina, V., Rameshkumaar V.P., and Shobika C (Sep 2020). The Role of CSR Accomplishments in India Towards Rural Empowerment. Proceedings on International E-Conference on Innovation in Rural Empowerment, Social Dynamics and Welfare in India, ISBN: 9789387748361, 72.",
        "Dr.V.P.Rameshkumaar (Sep 2020). Subscribers of Indian Mobile Telecom: Satisfaction with Experience and Loyalty. International Journal of Management (IJM) – SCOPUS, 11(9).",
        "Dr.P.K.Anjani (Sep 2020). Students' perception of online learning during COVID pandemic. Wutan Huatan Jisuan Jishu – Refereed UGC Care Journal.",
        "N.Nithya (Aug 2020). Impact of Business Intelligence Adoption on the Performance of Banks: A Conceptual Framework. Journal of Ambient Intelligence and Humanized Computing – SCOPUS, 4.594.",
        "Dr.D.Ganesan (Jul 2020). A study on customer proclivity towards store brands during COVID-19 Pandemic. Journal of Critical Reviews – SCOPUS, Volume 7, Jan 2020, Issue 14, 1.091 (2017).",
        "Jothi Francina V., Rameshkumaar V.P., and Sathish V (Jul 2020). The Impact of Logistics Service Quality on Loyalty using satisfaction as a moderating variable: A study with Entrepreneurs. International Journal of Advanced Science and Technology (IJAST), ISSN: 2207-6360, Scopus Indexed, 29(04), 6911-6920."
    ],

    "2019-2020": [
        "Dr.P.K.Anjani (May 2020). A study on structural changes among bank employees - An empirical study with special reference to Salem District. International Journal of Management – SCOPUS, Volume 11, Issue 5.",
        "Jothi Francina, V., Rameshkumaar V.P., and Sathish V (May 2020). A Simulation Model for Overhauling of Packaging Material in B2C E-Logistics. Journal of Xidian University, ISSN No: 1001-2400, Scopus Indexed, UGC-CARE Approved Group 2 Journal, 14(05), 4239-4246.",
        "Dr.M.S.Kamalaveni (Apr 2020). Faculty in Private Engineering Colleges and Determinants of Satisfaction with Job. Journal of Sociology and Social Anthropology – SCOPUS, Volume 11, Issue 1-2.",
        "Dr.P.Kamalakannan, Dr.S.Sathya Kala (20-Mar 2020). A study on Pre and Post Demonetisation Impacts on Selected Sectors (With reference to Indian stock market). International Journal of Scientific and Technology Research – SCOPUS, Volume 9, Issue 3, 5.4.",
        "Dr.P.Praba Devi (20-Mar 2020). Behavioural Based Safety Practices at Small Manufacturing Units, Chennai. International Journal of Recent Technology and Engineering – SCOPUS, Volume 8, Issue 6, 3.7.",
        "Dr.N.Nithya (20-Mar 2020). Factors Determining the Service. International Journal of Emerging Technology, Volume 11, Issue 2.",
        "Jothi Francina, V., Padmanaban G., Vijayanand S., Irene Martina, and Komal C (Mar 2020). Stress Indicators in Professional Teaching – Perception and Semantic Interpretation. International Journal of Recent Technology and Engineering (IJRTE), ISSN: 2277-3878, Scopus Indexed, 8(6), 3156-3161.",
        "Dr.P.Praba Devi (20-Feb 2020). Bancassurance and its Antecedents to Customer Buying Intentions. AIP Conference Proceedings – SCOPUS, Volume 2207, 0.11.",
        "Jothi Francina, V., and Harini G.K (Jan 2020). Content Marketing and Website Efficiency of Mallow Technologies Private Limited. ITIHAS The Journal of Indian Management, Newzen Research Publications, ISSN (Online): 2456-7803, ISSN (Print): 2249-7803, 8(4), 33-43.",
        "M.S.Kamalaveni (20-Jan 2020). An Ethical Dilemma – Case Study. International Journal of Innovative Research in Management Studies (IJIRMS) – SCOPUS, Volume 4, Issue 8, 5.4.",
        "Dr.N.Nithya, Dr.V.P.Ramesh Kumar (Aug 2019). International Journal of Supply Chain Management – SCOPUS, Volume 8, Issue 4, 42-51.",
        "Dr.D.Ganesan, Ms.Umaya Salma (Dec 2019). Effectiveness of Surrogate Advertisements among Viewers. International Journal of Innovative Technology and Exploring Engineering (IJITEE) – SCOPUS, Volume 9, Issue 2, 4950-4957.",
        "Dr.D.Ganesan (Dec 2019). Customer Perception about Private Label Brands in Salem. International Journal of Recent Technology and Engineering (IJRTE) – SCOPUS, Volume 8, Issue 4S2, 963-967."
    ],

    "2018-2019": [
        "Ganesan D., Jothi Francina, V., and Rameshkumaar V.P (Feb 2019). Effectiveness of Corporate Responsibility Advertising Messages of Automobile Companies among Audience Perception. International Journal of Mechanical Engineering and Technology (IJMET), 10(02), Scopus Indexed, Impact Factor (2016): 9.2286, 934-941."
    ]

};

export default function PublicationsAccordion() {
    const [activeYear, setActiveYear] = useState<string | null>("");

    const toggleYear = (year: string) => {
        setActiveYear(activeYear === year ? null : year);
    };



    return (
        <div className="space-y-4">
            {Object.entries(publications).map(([year, items]) => (
                <div key={year} className="border rounded-lg overflow-hidden">
                    {/* Year Header */}
                    <button
                        onClick={() => toggleYear(year)}
                        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold flex justify-between items-center"
                    >
                        <span>{year}</span>
                        <span>{activeYear === year ? "−" : "+"}</span>
                    </button>

                    {/* Year Content */}
                    <AnimatePresence initial={false}>
                        {activeYear === year && (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                layout // <-- lets Framer Motion handle auto-height smoothly
                                className="px-6 py-4 bg-white"
                            >
                                <motion.ul
                                    className="space-y-3"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.05 } },
                                        hidden: {}
                                    }}
                                >
                                    {items.map((pub, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-2"
                                            variants={{
                                                hidden: { opacity: 0, x: -10 },
                                                visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                                            }}
                                        >
                                            <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{pub}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        )}
                    </AnimatePresence>


                </div>
            ))}
        </div>
    );
}
