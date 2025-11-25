export type Publication = {
    authors: string;
    date: string;
    title: string;
    journal: string;
    link?: string;
};

export type PublicationsByYear = {
    [year: string]: Publication[];
};

export const publications: PublicationsByYear = {
    "2025-26": [
        {
            authors: "Anjani, P. K., & Sarathy, T.",
            date: "Aug 2025",
            title:
                "Government media strategies in crisis communication: Integrating bioanalytical evidence in pandemic information management.",
            journal: "Journal of Applied Bioanalysis, 11(SI1), 211–223.",
            link: "https://doi.org/10.53555/jab.v11si1.358",
        },
        {
            authors: "Anjnai, P. K., & Raja, D.",
            date: "Sep 2025",
            title:
                "Weaving through struggles: An assessment of the socio-economic status of traditional weavers.",
            journal: "Journal of Carcinogenesis, 24(3s), 593–599.",
            link: "https://doi.org/10.64149/J.Carcinog.24.3s.593-599",
        },
        {
            authors: "Praba Devi, P., & Subashini, T.",
            date: "Aug 2025",
            title:
                "Navigating the balance: Unveiling the factors influencing work-life harmony among teaching professionals.",
            journal: "Indian Journal of Natural Sciences, 16(91), 99157–99166.",
            link: "https://tnsroindia.org.in/JOURNAL/issues91/IJONS%20-%20ISSUE%2091%20-%20AUG%202025%20-%20FULL%20TEXT%20PAGE%20-%20PART%2002.pdf",
        },
        {
            authors: "Praba Devi, P., Balaji, R., Gayathri, G., Rohini, V., Arul Krishnan, S., & Prakash, K.",
            date: "Aug 2025",
            title:
                "Evaluating the efficacy of AI-enhanced CRM tools in enhancing user experience in Indian online shopping.",
            journal: "International Journal of Environmental Sciences, 11(5), 2257–2264.",
            link: "https://doi.org/10.64252/2jqx1g66",
        },
        {
            authors: "Praba Devi, P., Ranjana, A., Juhi, A., Sudani, B., Sundaresan, N., & Sur, S.",
            date: "Aug 2025",
            title:
                "Synthesis, structural elucidation, and bioanalytical profiling of novel heterocyclic compounds with potential anti-inflammatory and antioxidant properties.",
            journal: "Journal of Applied Bioanalysis, 11(4), 1053–1061.",
            link: "https://doi.org/10.53555/jab.v11i4.476",
        },
        {
            authors: "Praba Devi, P., Gowtham, N., Bartaria, D., Hao, P. T., Sing, S., & Rajbongshi, J.",
            date: "Aug 2025",
            title:
                "Metabolomics and proteomics in disease biomarker discovery: A bioanalytical approach.",
            journal: "Journal of Applied Bioanalysis, 11(4), 1085–1091.",
            link: "https://doi.org/10.53555/jab.v11i4.480",
        },
        {
            authors: "Kamalaveni, M. S., Ramesh, S., & Manimaran, S.",
            date: "Aug 2025",
            title:
                "Problems faced by Generation X and Y in retention of faculty at self-financing engineering institutions.",
            journal: "Indian Journal of Natural Sciences, 16(91), 98535–98543.",
            link: "https://tnsroindia.org.in/JOURNAL/issues91/IJONS%20-%20ISSUE%2091%20-%20AUGUST%202025%20-%20FULL%20TEXT%20PAGE%20-%20PART%2001.pdf",
        },
        {
            authors: "Saravanan, S.",
            date: "Aug 2025",
            title: "Hypnotics: An induced interest.",
            journal: "Indian Journal of Natural Sciences.",
            // No DOI / external link available
        },
        {
            authors: "Saravanan, S., Ambuli, T. V., Dwivedi, P. K., Agarwal, R., Kumar, K. S., Bale, A. S., & Bharadwaj, R.",
            date: "Jul 2025",
            title:
                "Role of emerging technologies in transforming e-marketing and financial management practices.",
            journal: "International Journal of Environmental Sciences, 11(19s), 3224–3230.",
            link: "https://doi.org/10.64252/jekjj216",
        },
        {
            authors: "Rameshkumaar, V. P., Rohini, V., Prakash, K., Sivakumar, S., & Krishnan, A.",
            date: "Jun 2025",
            title:
                "Artificial intelligence in business: Evaluating the transformative role of AI in managerial decision-making efficiency.",
            journal: "International Journal of Environmental Sciences, 11(8s), 478–491.",
            link: "https://doi.org/10.64252/1m5pd925",
        },
        {
            authors: "Rameshkumaar, V. P., Gayathri, G., Rohini, V., Prakash, K., Arul Krishnan, S., & Vijaykumar, V.",
            date: "Aug 2025",
            title:
                "AI and employee performance: Unravelling the influence of AI literacy, innovation capability, and collaboration.",
            journal: "International Journal of Environmental Sciences, 11(6), 1696–1705.",
            link: "https://doi.org/10.64252/f7bj2361",
        },
    ],


    "2024-25": [
        {
            authors: "P.K. Anjani, J. Srivatava, S. Pathapati, R. N, R.A. Mir, S.C. Mondal",
            date: "2024",
            title: "Applications of remote sensing in land use and land cover change analysis: A review of methodologies and case studies.",
            journal: "Journal of Applied Bioanalysis, 10(3), 132–137.",
            link: "https://doi.org/10.53555/jab.v10i3.053",
        },
        {
            authors: "P.K. Anjani",
            date: "2024",
            title: "Innovative green finance practices for sustainable Indian economy: A thematic review.",
            journal: "Journal Cahiers Magellanes, 6(2), 1409–1421.",
            link: "https://doi.org/10.6084/m9.figshare.26311547",
        },
        {
            authors: "P.K. Anjani",
            date: "2024",
            title: "People, planet, and profits - HR's role in fostering innovative sustainable development in management.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN - Elsevier.",
            link: "https://doi.org/10.2139/ssrn.5075867",
        },
        {
            authors: "P.K. Anjani",
            date: "2025",
            title: "AI-driven employee engagement: Transforming green HR initiatives into sustainable business practices.",
            journal: "RISUS - Journal on Innovation and Sustainability, 16(2), 127–138.",
            link: "https://doi.org/10.23925/2179-3565.2025v16i2p135-145",
        },
        {
            authors: "P.K. Anjani, Prabavathi",
            date: "2025",
            title: "How does talent management influence organizational performance? The role of a healthy workplace environment in ITES firms in Bengaluru.",
            journal: "Revista de Cercetare si Interventie Sociala, 88(1), 187–208.",
            link: "https://doi.org/10.33788/rcis.88.12",
        },
        {
            authors: "P.K. Anjani, Raja",
            date: "2025",
            title: "Socio-economic vulnerabilities and crisis factors in Tamil Nadu’s handloom sector: Implications for weaver well-being and industry sustainability.",
            journal: "Journal of Information Systems Engineering and Management, 10(3), 264–272.",
            link: "https://doi.org/10.52783/jisem.v10i3.4100",
        },
        {
            authors: "Anjani, P.K., Raja, D.",
            date: "2025",
            title: "Socio-Economic Conditions and Social Well-being of Handloom Weavers: Challenges, Opportunities and Policy Implications.",
            journal: "Journal of the Textile Association, 85(6), 673–679.",
            link: "https://www.textileassociationindia.org/_files/ugd/aecc8c_99acb52489de4c2896a11307daa6e833.pdf",
        },
        {
            authors: "Anjani, P.K., Rameshkumaar, V.P.",
            date: "2024-10-24",
            title: "Socio-economic and political history of Maharashtra in the 19th century.",
            journal: "AIP Conference Proceedings, 3306(1).",
            link: "https://pubs.aip.org/aip/acp/article-abstract/3306/1/030016/3348773/Socio-economic-and-political-history-of?redirectedFrom=fulltext",
        },
        {
            authors: "Anjani, P.K.",
            date: "2025-02-25",
            title: "Well-Being in the Age of Digital Transformation: Examining Stress, Workload and Support Systems for IT Employees.",
            journal: "Indian Journal of Natural Sciences, 15(88), 88862–88870.",
            link: "https://tnsroindia.org.in/JOURNAL/issue88/ISSUE%2088%20-FEB%202025-FULL%20TEXT%20PART-02.pdf",
        },
        {
            authors: "Praba Devi, P., Chandan, R.R., Ramaraj, S., Sarishma, Sultanuddin, S.J., Indhuma, E.",
            date: "2024-07",
            title: "A Novel Machine Learning-Based Early Warning Detection System for Business Customer Churn.",
            journal: "5th International Conference on Recent Trends in Computer Science and Technology (ICRTCST). IEEE Xplore, 250–254.",
            link: "https://ieeexplore.ieee.org/document/10578489/",
        },
        {
            authors: "Praba Devi, P., Aparna, M.S.",
            date: "2024-12",
            title: "Association of Perceived Identification of Organisation, Work Engagement and Organisational Citizenship Behaviour with Job Satisfaction and Turnover Intentions.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN - Elsevier.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5083856",
        },
        {
            authors: "Praba Devi, P.",
            date: "2024-12",
            title: "Technologies and Trends Empowering Green Consumers in Salem City.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN - Elsevier.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5083826",
        },
        {
            authors: "Praba Devi, P., Ganesan, D., Hemamalini, R., Ashwathi, A., Rameshkumaar, V.P.",
            date: "2024-12",
            title: "The Influence of Virtual Technology on Production Systems: An Evaluation of Workflow Improvement and Cost Reduction.",
            journal: "Indian Journal of Natural Sciences, 15(87), 83891–83896.",
            link: "https://tnsroindia.org.in/JOURNAL/issue87/ISSUE%2087%20-%20DECEMBER%202024%20-%20FULL%20TEXT%20PART%2001.pdf",
        },
        {
            authors: "Praba Devi, P., Sabiya, C.V., Nitish, M., Rouban, A.S., Sanjay, S.",
            date: "2024-11",
            title: "GREEN CONSUMERISM FROM THE PERSPECTIVE OF THEORY OF PLANNED BEHAVIOUR.",
            journal: "Cahiers Magellanes-NS, 6(2), 7344–7350.",
            link: "https://cahiersmagellanes.com/index.php/CMN/article/view/1074/867",
        },
        {
            authors: "Praba Devi, P.",
            date: "2025-06-25",
            title: "A literary review on conflict management strategies.",
            journal: "International Conference on Modelling Strategies in Mathematics: ICMSM 2024, AIP Conference Proceedings, 3306(1), 030080-1–030080-4.",
            link: "https://pubs.aip.org/aip/acp/article/3306/1/030080/3348790/A-literary-review-on-conflict-management",
        },
        {
            authors: "Praba Devi, P., Umida, Y.A.K., Mahadevan, S., Shodmonjon, S.U.",
            date: "2025-06-25",
            title: "Words and algorithms: The intersection of linguistic and artificial intelligence.",
            journal: "International Conference on Modelling Strategies in Mathematics: ICMSM 2024, AIP Conference Proceedings, 3306(1), 050005-1–050005-6.",
            link: "https://pubs.aip.org/aip/acp/article-abstract/3306/1/050005/3348883/Words-and-algorithms-The-intersection-of?redirectedFrom=fulltext",
        },
        {
            authors: "Praba Devi, P., Endla, P., Suresh, K., RajiChellam, J., Vurukonda, N., Kumararaja, K.",
            date: "2025-05",
            title: "Emotionally Intelligent AI Powered Customer Experience Optimization with Deep Learning Based Sentiment Analysis and Engagement Metrics.",
            journal: "Proceedings of the International Conference on Sustainability Innovation in Computing and Engineering (ICSICE 24), Advances in Computer Science Research, 120, 565–575. Atlantis Press.",
            link: "https://www.atlantis-press.com/proceedings/icsice-24/126011392",
        },
        {
            authors: "Rameshkumaar, V.P., Priya, K., Rohini, V., Arulkrishnan, S.",
            date: "2024-10-06",
            title: "Exploring effective leadership strategies to drive organization success and foster sustainable growth.",
            journal: "IEEE Xplore.",
            link: "https://ieeexplore.ieee.org/document/10690843",
        },
        {
            authors: "Rameshkumaar, V.P., Ashwathi, A, Praba Devi, P.",
            date: "2024-12",
            title: "Navigating Work-Life Balance: Assessing the Impact of Remote Work During and Beyond the Covid-19 Pandemic in the ITES Industry.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN - Elsevier.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5083909",
        },
        {
            authors: "Rameshkumaar, V.P., Arul Raja, R.A., Shavalliuddin, S.M., Fakhriddin Ugli, S.J.",
            date: "2025-06-25",
            title: "Phyto assisted fabrication of highly stable titania nanoparticles for environmental purification applications.",
            journal: "International Conference on Modelling Strategies in Mathematics: ICMSM 2024, AIP Conference Proceedings, 3306(1).",
            link: "https://pubs.aip.org/aip/acp/article-abstract/3306/1/040004/3348800/Phyto-assisted-fabrication-of-highly-stable?redirectedFrom=fulltext",
        },
        {
            authors: "Pundir, S., Murugan, V.G., Raman, P, Rameshkumaar, V.P., Jahnavi, R., Sudharsan, P.",
            date: "2024-07",
            title: "Automatic Stock Price Prediction and Classification Based on Hybrid with AI Feature Selection Method.",
            journal: "2024 5th International Conference on Recent Trends in Computer Science and Technology. IEEE.",
            link: "https://doi.org/10.1063/5.0275774",
        },

        {
            authors: "Rameshkumaar, V.P., Rohini, V., Arul Krishnan, S., Prakash, K., Sivakumar, S., Anto Pravin Singh, D.",
            date: "2025-06-25",
            title: "Artificial Intelligence In Business: Evaluating The Transformative Role Of AI In Managerial Decision-Making Efficiency.",
            journal: "International Journal of Environment Services, 11, 478–491.",
            link: "https://theaspd.com/index.php/ijes/article/view/941",
        },
        {
            authors: "Kamalaveni, M.S., Mohanraj, G., Jothibasu, L., Surya, M., Sowndarya, S.",
            date: "2024-12",
            title: "The Impact of Employee Experience on Organizational Performance.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN - Elsevier.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5065528",
        },
        {
            authors: "Kamalaveni, M.S., Xalxo, S., Sivasubramani, K., Parthiban, K., Prakriti Koirala, M.S.",
            date: "2024-12",
            title: "An Analysis of Performance Appraisal Effectiveness and its Influence on Employee Motivation in the Automotive Industry.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN - Elsevier.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5088834",
        },
        {
            authors: "Kamalaveni, M.S., Koirala, P., Timsina, B., Koirala, D.",
            date: "2024-12",
            title: "Study on Job Satisfaction among the Employees of Nepal Rastra Bank (NRB).",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN - Elsevier.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5075240",
        },
        {
            authors: "Xalxo, S., Palai, S., Pual, S., & Kamalaveni, M.S.",
            date: "2024-12",
            title: "Women in leadership breaking social stigmas and taboos and strategies for success: A qualitative study.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN - Elsevier.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5077516",
        },
        {
            authors: "Kamalaveni, M.S., Suthamathi, D., & Madhumadhi, G.",
            date: "2025-02-25",
            title: "Exploring innovative approaches to training delivery in the era of digital transformation.",
            journal: "Indian Journal of Natural Sciences, 15(88), 88781–88787.",
            link: "https://www.tnsroindia.org.in/JOURNAL/issue88/ISSUE%2088%20-FEB%202025-FULL%20TEXT%20PART-02.pdf",
        },
        {
            authors: "Kamalaveni, M.S., Srinivasan, K., Madhumadhi, G., Prabhakaran, G., & Sonalia, A.A.",
            date: "2025-04",
            title: "An analysis on organizational culture and gender equality: Examining the impact on promotion opportunities.",
            journal: "Indian Journal of Natural Sciences, 16(89), 92542–92549.",
            link: "https://tnsroindia.org.in/JOURNAL/issue89/IJONS%20-%20ISSUE%2089%20-%20APRIL%202025%20-%20FULL%20TEXT%20-%20%20PART%20-%2002--19.04.2025.pdf",
        },
        {
            authors: "Kamalaveni, M.S., Parthiban, K., Sivasubramani, K., & Praba Devi, P.",
            date: "2025-06",
            title: "An evaluation of public health and healthcare policies in India.",
            journal: "AIP Conference Proceedings.",
            link: "https://pubs.aip.org/aip/acp/article-abstract/3306/1/030017/3348772/An-evaluation-of-public-health-and-healthcare?redirectedFrom=fulltext",
        },
        {
            authors: "Burugulla, J.K.R., Amala Suzana, A., Kamalaveni, M.S., Shiva Shankar, S., Sharma, V., & Chidambaram, P.K.",
            date: "2025-05-25",
            title: "Augmented intelligence powered decision support systems for data driven public participation and policy innovation in governance.",
            journal: "Proceedings of the International Conference on Sustainability Innovation in Computing and Engineering (ICSICE 2024).",
            link: "https://www.atlantis-press.com/proceedings/icsice-24/126011375",
        },
        {
            authors: "Anand, J., Aronkar, P., Shaikh, M., Kamalaveni, M.S., Palav, M.R., & Palav, S.M.",
            date: "2025",
            title: "IoE applications in real-time workforce management.",
            journal: "In IGI Global Scientific Publishing.",
            link: "https://www.igi-global.com/viewtitlesample.aspx?id=365772&ptid=347909&t=IoE%20Applications%20in%20Real-Time%20Workforce%20Management&isxn=9798369373675",
        },
        {
            authors: "Padmanaban, G., & Anjani, P.K.",
            date: "2024-12",
            title: "Analysis of renting versus buying construction heavy equipment.",
            journal: "Expert Projects Publishing. SSRN - Elsevier.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5088893",
        },
        {
            authors: "Sridevi, M., Mohanasundari, M., Vanitha, P., Gomathi, T., Seenivasan, T., Jayasurya, S.M., & Sathyakala, S.",
            date: "2025-04",
            title: "A study on artificial intelligence enhanced healthcare.",
            journal: "Green Computing for Communication Technologies, 3279(1), 020202-1–020202-12. AIP Publishing House.",
            link: "https://pubs.aip.org/aip/acp/article-abstract/3279/1/020202/3341855/A-study-on-artificial-intelligence-enhanced-mental?redirectedFrom=fulltext",
        },
        {
            authors: "Mohanasundari, M., Vanshi, S.P., Manimegalai, V., Swathylakshmi, M., Gokul, S., & Sathyakala, S.",
            date: "2025-04",
            title: "A study on women acceptance of UPI services in Tamil Nadu.",
            journal: "Green Computing for Communication Technologies, 3279(1), 020150-1–020150-8. AIP Publishing House.",
            link: "https://pubs.aip.org/aip/acp/article-abstract/3279/1/020150/3341808/A-study-on-women-acceptance-of-UPI-services-in?redirectedFrom=fulltext",
        },
        {
            authors: "Durga Devi, S., Infant Jerome, M., Ashik Mansoor, K.A., Nithishkumar, M., & Jothi Francina, V.",
            date: "2024-07",
            title: "Exploration of challenges encountered in digital recruitment.",
            journal: "Cahiers Magellanes-NS, 6(2), 1971–1981.",
            link: "http://magellanes.com/index.php/CMN/article/view/488",
        },
        {
            authors: "Jothi Francina, V, Varshaa, B., & Nithisha, C.",
            date: "2024-08",
            title: "Cybersecurity issues & challenges in Industry 4.0.",
            journal: "In Second International Conference on Emerging Trends in IOT and Computing Technologies. CRC Press-Taylor and Francis Group, 1(1), 83–85.",
            link: "https://www.routledge.com/Emerging-Trends-in-IoT-and-Computing-Technologies-Proceedings-of-the-International-Conference-on-Emerging-Trends-in-IoT-and-Computing-Techno/Tripathi-Agarwal-Pal-Perwej/p/book/9781032879246?srsltid=AfmBOoqapqcKNUaDXORILVI1YmnnlCEhN2n1fGK488aGWT2VfOqSKJR9",
        },
        {
            authors: "Jothi Francina, V, Ruchitra, S., Dineshkumar, V., Kaavya, T.S., Shaileysh, M.V.R., & Mahalakshmi, R.",
            date: "2024-11",
            title: "A study on customer retention strategies: Fostering loyalty through quality.",
            journal: "Cahiers Magellanes-NS, 6(2), 6837–6848.",
            link: "https://cahiersmagellanes.com/index.php/CMN/article/view/1012",
        },
        {
            authors: "Jothi Francina, V., Sreenithikaa, V., K.A., Sabari Uthira, D., Gowthaman, C., & Nithisha.",
            date: "2024-12",
            title: "The influence of e-commerce on the logistics network in the Salem region.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN - Elsevier.",
            link: "https://ssrn.com/abstract=5075874",
        },
        {
            authors: "Francina, V. J., Durgadevi, S., & Saravadurai, A.",
            date: "2025-01",
            title: "Supply chain management practices of select petroleum retail outlets in Salem District.",
            journal: "Emperor Journal of Operations Research, 4(1). Mayas.",
            link: "https://www.mayas.info/view-archive-issues/51/4/1/2025-01-06",
        },
        {
            authors: "Francina, V. J., & Mansoor, A.",
            date: "2024-02-24",
            title: "Psychology behind viral content: An analysis of successful campaigns.",
            journal: "Social Sciences Education eJournal, 8(66). SSRN.",
            link: "https://ssrn.com/abstract=5130517",
        },
        {
            authors: "Francina, V. J., Shanthini, B., Subhashini, S., Kiruthika, S., & Yamuna, S.",
            date: "2024-05-25",
            title: "Predicting customer churn using artificial neural networks: A data-driven approach to enhance customer retention in e-commerce.",
            journal: "Journal of Information Systems Engineering and Management, 10(41).",
            link: "https://doi.org/10.52783/jisem.v10i41s.7854",
        },
        {
            authors: "Francina, V. J., Sivabalakumar, N., Nithya, S., & Sughan.",
            date: "2025-07",
            title: "Eco-conscious operations management: Strategies for sustainable business practices.",
            journal: "Tanz, 20(7), 155–159.",
            link: "https://doi.org/10.61350/TJ5440353",
        },
        {
            authors: "Francina, V. J., Miruthubashini, M., Divya, K., Dheepan, R., & Padmavathi, R.",
            date: "2025-05",
            title: "Human resource practices in the textile industry: A case study of a city in Western Tamil Nadu.",
            journal: "Proceedings of the Thirteenth International Conference on Advanced Science and Engineering Research (Vol. 9, No. 1). Al-Ameen Publications.",
            link: "https://www.ijaser.in/journals/view/volume9/issue1/human-resource-practices-in-the-textile-industry/951",
        },
        {
            authors: "Muralidharan, P., Radhakrishna, V., Ravi, H., & Elango, S.",
            date: "2024-12",
            title: "Future of knowledge management in investment banking: Role of personal intelligent assistants.",
            journal: "Methodological Innovations, 17(4), 229–247.",
            link: "https://doi.org/10.1177/20597991241287118",
        },
        {
            authors: "Muralidharan, P., Subramani, K., Habelalmateen, M. I., Pant, R., Mishra, A., & Ikhar, S.",
            date: "2024-07",
            title: "Improving renewable energy operations in smart grids through machine learning.",
            journal: "E3S Web of Conferences, 540, 03003.",
            link: "https://doi.org/10.1051/e3sconf/202454010023",
        },
        {
            authors: "Muralidharan, P., Sowmiya, S., Senthilkumar, P., Kuppuraj, T., Mishra, A., & Rosaline, S.",
            date: "2024-08",
            title: "The creation of intelligent surfaces for the purpose of next-gen wireless networks.",
            journal: "IEEE Xplore, 229–234.",
            link: "https://doi.org/10.1109/ICACITE60783.2024.10616689",
        },
        {
            authors: "Senthil Kumar, V. S., Bhat, M. H., Ahmad, M., Kant, K., & Yugandhar, K.",
            date: "2025-06",
            title: "Applications of nonlinear combinatorics in optimizing network traffic.",
            journal: "Journal of Information Systems Engineering and Management, 10(4), 1485.",
            link: "https://www.jisem-journal.com/index.php/journal/article/view/10867",
        },
        {
            authors: "Senthil Kumar, V. S., Verma, T., Dwivedi, V., Kumari, C., Praveen, S., & Puri, A.",
            date: "2025-06",
            title: "Leveraging AI and automation in research management: A path to enhanced productivity.",
            journal: "Journal of Information Systems Engineering and Management.",
            link: "https://jisem-journal.com/index.php/journal/article/view/11636",
        },
        {
            authors: "Umarani, C., & Hareesh, G. J.",
            date: "2024",
            title: "A study on customer satisfaction in online grocery delivery industry.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN.",
            link: "https://doi.org/10.2139/ssrn.5075935",
        },
        {
            authors: "Umarani, C., & Pavithra, S.",
            date: "2025-06",
            title: "The Korean food craze: A global tasteful phenomenon.",
            journal: "SSRN.",
            link: "https://doi.org/10.2139/ssrn.5224239",
        },
        {
            authors: "Saravanan, S., & Yoganandan, G.",
            date: "2024-12",
            title: "Green human resource management: An innovative approach towards sustainability.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN.",
            link: "https://doi.org/10.2139/ssrn.5091465",
        },
        {
            authors: "Saravanan, S., Madhumadhi, G., Megala, A., Reshmi, N. P., Yeshwanth, & Bharathi, J.",
            date: "2024-12",
            title: "Reinvent business as a force of sustainable development in super markets.",
            journal: "3rd International Conference on Optimization Techniques in the Field of Engineering (ICOFE-2024). SSRN.",
            link: "https://doi.org/10.2139/ssrn.5089031",
        },
        {
            authors: "Saravanan, S., Chinthamu, N., Balaram, A., Bharathi, K. S., Jaslin, J. S., & Saravanan, T.",
            date: "2025-03",
            title: "Augmented reality in retail transforming shopping experiences through interactive product visualization.",
            journal: "ICSICE 2025 - Harnessing Innovation for Sustainability in Computing and Engineering Solutions. ITM Web of Conferences.",
            link: "https://doi.org/10.1051/itmconf/20257605010",
        },
        {
            authors: "Saravanan, S., Revathi, P., Madhumadhi, G., Prabhakaran, G., & Hareesh, J.",
            date: "2025-05",
            title: "Behavioural analysis of digital currency among investors in India.",
            journal: "Business, Management and Economics Engineering, 23(1), 589–609. Vilnius Gediminas Technical University.",
            link: "https://businessmanagementeconomic.org/article/view-2025/589.html",
        }
    ],


    "2023-24": [
        {
            authors: "P.K. Anjani",
            date: "2024",
            title: "Employee experience and the digital shift: A deep dive into India's IT sector HR transformation.",
            journal: "Indian Journal of Natural Sciences, 83, 976–997.",
            link: "https://tnsroindia.org.in/JOURNAL/issue83/ISSUE%20-%2083%20-%20APRIL%202024%20-%20FULL%20TEXT%20PART%20%20-%2001.pdf"
        },
        {
            authors: "P. Praba Devi, D. Thankachamb, S. Ranganathan, V. Ravi, G. Manickam, & M. Alagarsamy",
            date: "2024",
            title: "Deep learning-enabled holistic control and prediction system for building energy consumption and distribution optimization.",
            journal: "Electric Power Components and Systems, 0, 1–15.",
            link: "https://doi.org/10.1080/15325008.2024.2337858"
        },
        {
            authors: "P. Praba Devi, R. Chandan, R. S., S. Sarishma, S.J. Sultanuddin, & E. Indhuma",
            date: "2024",
            title: "A novel machine learning-based early warning detection system for business customer churn.",
            journal: "IEEE Xplore.",
            link: "https://doi.org/10.1109/ICRTCST61793.2024.10578489"
        },
        {
            authors: "N. Nithya & V.V. Muthusamy",
            date: "2023",
            title: "Covid 19 vaccine and employees psychological well-being in the healthcare sector: Role of perceived safety and fear.",
            journal: "International Journal of Operations and Quantitative Management.",
            link: "https://doi.org/10.46970/2022.29.1.16"
        },
        {
            authors: "N. Nithya & V.V. Muthusamy",
            date: "2023",
            title: "Nifty fifty derivative trading strategy: A heuristic model approach.",
            journal: "International Journal of Economics and Finance Studies.",
            link: "https://doi.org/10.34109/ijefs.202315221"
        },
        {
            authors: "N. Nithya & V.V. Muthusamy",
            date: "2023",
            title: "Predictors of quality of work in the Indian pharma industry: A perceptual study among medical representatives.",
            journal: "Journal of Modern Project Management.",
            link: "https://doi.org/10.19255/JMPM03201"
        },
        {
            authors: "V.P. Rameshkumaar, S. Arul Krishnan, K. Prakash, D. Sugandaran, & B. Balaji",
            date: "2023",
            title: "Impact of celebrity endorsement on cause-related marketing and purchase intention of FMCG consumers in Chennai.",
            journal: "Journal of Statistics & Management Systems, 26(7), 1627–1641.",
            link: "https://doi.org/10.47974/JSMS-1123"
        },
        {
            authors: "V.P. Rameshkumaar, S. Arul Krishnan, K. Prakash, D. Sugandaran, & B. Balaji",
            date: "2023",
            title: "Role of job design on institutional support and work-life equilibrium of women teachers in Chennai.",
            journal: "Journal of Statistics & Management Systems, 26(7), 1549–1563.",
            link: "https://doi.org/10.47974/JSMS-1122"
        },
        {
            authors: "M.S. Kamalaveni, M. Nisa, M. Saranyadevi, & K. Vaitheeswari Menaga",
            date: "2024",
            title: "A study of prevalence of occupational stress among doctors and its impact on job performance.",
            journal: "Indian Journal of Natural Sciences, 83, 72442–72455.",
            link: "https://tnsroindia.org.in/JOURNAL/issue83/IJONS%20-%20ISSUE%2083%20-%20FULL%20TEXT%20%20-%20PART%20-%2002.pdf"
        },
        {
            authors: "S. Susendiran, S. Chandra Sekhar, K. Sai Sathvika, K. Shahidha Banu, B. Akhila, K. Humesh Chandu Reddy, & J. Reddy Sreeja",
            date: "2023",
            title: "A study on the problems and prospects of coconut products production and marketing in the district of Tirupati.",
            journal: "Journal of Research Administration.",
            link: "https://journalra.org/index.php/jra/article/view/389"
        },
        {
            authors: "U. Salma Shajahan, V. Vijaya Lakshmi, M. Mishra, J.S. Kushwah, M. Mohanasundari, & S. Boopathi",
            date: "2024",
            title: "Circular economy digital practices for ethical dimensions and policies for digital waste management.",
            journal: "In IGI Global Book Chapter.",
            link: "https://doi.org/10.4018/979-8-3693-1794-5"
        },
        {
            authors: "S. Sathyakala, K.V.S. Prasad, P.K. V., D. Chitra, V.T. Tale, & S.M. Patil",
            date: "2024",
            title: "Application of machine learning and IoT for enhancing safety and security in industries.",
            journal: "International Journal of Intelligent Systems and Application in Engineering, 16.",
            link: "https://ijisae.org/index.php/IJISAE/article/view/5182/3902"
        },
        {
            authors: "S. Sathyakala, S. Stalin, P. Dhinakaran, C. Vijai, L. Lakshman, & V. Varalakshmi",
            date: "2024",
            title: "Digital banking and deposit: Substitution effect of mobile applications on web services.",
            journal: "ICCES 2024 Conference Proceedings.",
            link: "https://doi.org/10.1109/ICCES62822.2024.10603856"
        },
        {
            authors: "Sathyakala, S.",
            date: "2024-06",
            title: "A novel approach of data-driven strategic decision-making in management: AI-enabled analysis of market trends, competitive intelligence, and internal performance data.",
            journal: "IEEE Conference Proceedings.",
            link: "https://doi.org/10.1109/ICONSTEM60960.2024.10568724"
        },
        {
            authors: "Sathyakala, S.",
            date: "2024-06",
            title: "Characteristics determining customer preferences for OTT video streaming: A multivariate analysis.",
            journal: "Entertainment Compounding, 4(1), Article 100746.",
            link: "https://doi.org/10.1016/j.entcom.2024.100746"
        },
        {
            authors: "Sathyakala, S.",
            date: "2023-08",
            title: "Understanding healthcare growth through health insurance industry: An empirical evidence from India.",
            journal: "AIP Conference Proceedings, 2857(1).",
            link: "https://doi.org/10.1063/5.0164269"
        },
        {
            authors: "Ganesan, D.",
            date: "2023-12",
            title: "Effect of AI chatbots towards competitive marketing strategies in hyper-competitive business environment.",
            journal: "International Journal of Advance and Innovative Research, 10(4).",
            link: "https://iaraedu.com/pdf/ijair-volume-10-issue-4-iv-october-december-2023.pdf"
        },
        {
            authors: "Ganesan, D.",
            date: "2024-01",
            title: "E-commerce business model analysis and success in urban area using AI-distributed machine learning.",
            journal: "IEEE Conference Proceedings.",
            link: "https://doi.org/10.1109/RMKMATE59243.2023.10369718"
        },
        {
            authors: "Ganesan, D.",
            date: "2024-07",
            title: "Analysis of human resource outsourcing and performance for selected food and beverage industries.",
            journal: "IPR Journal Patent Published.",
            link: "https://search.ipindia.gov.in/IPOJournal/Journal/ViewJournal"
        },
        {
            authors: "Ganesan, D.",
            date: "2024-11",
            title: "YouTube’s impact on gadget buying behaviours of Generation Z.",
            journal: "In An overview on business, management and economics research (Vol. 5).",
            link: "https://doi.org/10.9734/bpi/aobmer/v5/7949A"
        },
        {
            authors: "Umarani, C.",
            date: "2024-02",
            title: "A study on the work life balance of employees at a private animal driven products industry, Salem.",
            journal: "Boletín de Literatura Oral, 11(1), 220–226.",
            link: "https://www.boletindeliteraturaoral.com/index.php/bdlo/article/view/868"
        },
        {
            authors: "Umarani, C.",
            date: "2024-04",
            title: "A study of gold ornaments purchasing behaviour – influence of customer perception on design.",
            journal: "Educational Administration Theory and Practice, 30(4), 9237–9251.",
            link: "https://doi.org/10.53555/kuey.v30i4.3434"
        },
        {
            authors: "Saravanan, S.",
            date: "2024-05",
            title: "Financial responsibility: Exploring the influence of vehicle loan repayment credibility on behavioral perspective.",
            journal: "Educational Administration: Theory and Practice, 30(5), 7245–7252.",
            link: "https://doi.org/10.53555/kuey.v30i5.4149"
        },
        {
            authors: "Muralidharan, P.",
            date: "2024-06",
            title: "A review on condition monitoring of wind turbines using machine learning techniques.",
            journal: "E3S Web of Conferences, 540, 03003.",
            link: "https://doi.org/10.1051/e3sconf/202454003003"
        },
        {
            authors: "Sathyakala, S.",
            date: "2024-05",
            title: "AI-powered marketing: Revolutionizing customer engagement through innovative strategies.",
            journal: "In AI-powered marketing revolutionizing customer engagement through innovative strategies (Ch. 2).",
            link: "https://doi.org/10.4018/979-8-3693-2643-5.ch002"
        }
    ],


    "2022-23": [
        {
            authors: "Anjani, P. K.",
            date: "2022",
            title: "Optimal facial feature based emotional recognition using deep learning algorithm.",
            journal: "Computational Intelligence and Neuroscience, 2022, 10 pages.",
            link: "https://doi.org/10.1155/2022/8379202"
        },
        {
            authors: "Anjani, P. K.",
            date: "2022",
            title: "Improving sustainability of EDM sector by implementing.",
            journal: "Advances in Materials Science and Engineering, 2022, 10 pages.",
            link: "https://doi.org/10.1155/2022/6164599"
        },
        {
            authors: "Anjani, P. K.",
            date: "2022",
            title: "Awareness and promotion schemes of predicting the India’s coconut cultivation: A survey.",
            journal: "Journal of Northeastern University, 2997–3007.",
            link: "https://www.researchgate.net/publication/369926584_AWARENESS_AND_PROMOTION_SCHEMES_OF_PREDICTING_THE_INDIA'S_COCONUT_CULTIVATION_A_SURVEY"
        },
        {
            authors: "Nithya, N.",
            date: "2022",
            title: "Role of cyber security on employees' digital workplace performance: Exploring the effects of employees' digital awareness and organisational support.",
            journal: "International Journal of Cyber Criminology, 17(01), 54–71.",
            link: "https://cybercrimejournal.com/menuscript/index.php/cybercrimejournal/article/view/134"
        },
        {
            authors: "Nithya, N.",
            date: "2022",
            title: "Social network analysis for precise friend suggestion for Twitter by associating multiple networks using ML.",
            journal: "International Journal of Information Technology and Web Engineering, 17(1), 1-11.",
            link: "https://doi.org/10.4018/IJITWE.304050"
        },
        {
            authors: "Nithya, N.",
            date: "2022",
            title: "An analysis of students perception on online teaching-learning process using inferential statistics: An empirical study with special reference to Indian students.",
            journal: "Mathematical Statistician and Engineering Applications, 71(03), 756–769.",
            link: "https://www.philstat.org/special_issue/index.php/MSEA/article/view/248"
        },
        {
            authors: "Umarani, C.",
            date: "2022",
            title: "An impact of employee motivation on job performance of the employee.",
            journal: "International Journal of Early Childhood Special Education, 14(3), 9666–9670.",
            link: "http://www.int-jecse.net/abstract.php?id=2434"
        },
        {
            authors: "Praba Devi, P.",
            date: "2022",
            title: "An analysis of students perception on online teaching-learning process using inferential statistics: An empirical study with special reference to Indian students.",
            journal: "Mathematical Statistician and Engineering Applications, 71(3s).",
            link: "https://www.philstat.org.ph/special_issue/index.php/MSEA/article/view/248"
        },
        {
            authors: "Kamalaveni, M. S.",
            date: "2023",
            title: "Contract farming in India: A theoretical study.",
            journal: "Indian Journal of Natural Sciences, 13(76), 52715–52720.",
            link: "https://tnsroindia.org.in/JOURNAL/issue76/ISSUE%2076%20FEBRUARY%202023%20-%20FULL%20TEXT%20PART%2002.pdf"
        },
        {
            authors: "Kamalaveni, M. S.",
            date: "2023",
            title: "Problems and challenges of farmers in contract farming in India.",
            journal: "Indian Journal of Natural Sciences, 14(77), 54431–54435.",
            link: "https://tnsroindia.org.in/JOURNAL/issue77/ISSUE%2077%20APRIL%202023%20-%20FULL%20TEXT%20PART%2001.pdf"
        },
        {
            authors: "Kamalaveni, M. S.",
            date: "2023",
            title: "Case study on Consumer Protection Act.",
            journal: "International Journal of Innovative Research in Management Studies, 5(12).",
            link: "http://ijirms.com/downloads/3004202304052023-1.pdf"
        },
        {
            authors: "Ganesan, D.",
            date: "2022",
            title: "Perception of customers towards service quality effectiveness of a co-operative bank – An empirical study.",
            journal: "International Journal of Early Childhood Special Education, 14(03), 9657–9665.",
            link: "http://www.int-jecse.net/abstract.php?id=2434"
        },
        {
            authors: "Susendiran, S.",
            date: "2022",
            title: "A case study – Women entrepreneurs put ‘healthy ones’ in children snacks.",
            journal: "International Research Journal of Innovations in Engineering and Technology (IRJIET), 6(8), 154–156.",
            link: "https://doi.org/10.47001/IRJIET/2022.608023"
        },
        {
            authors: "Susendiran, S.",
            date: "2022",
            title: "A study on consumer behavior towards digital wallets – An empirical approach.",
            journal: "IJFANS International Journal of Food and Nutritional Sciences, 11(S3), 1392–1402.",
            link: "https://www.ijfans.org/uploads/paper/94e6b0ae8394e5fef72d8baba79ad15c.pdf"
        },
        {
            authors: "Susendiran, S.",
            date: "2022",
            title: "Exploratory factor analysis and confirmatory factor analysis on consumer perception about celebrity endorsement and buying behavior through advertisement media – India context data set.",
            journal: "International Research Journal of Innovations in Engineering and Technology (IRJIET), 6(9), 144–147.",
            link: "https://doi.org/10.47001/IRJIET/2022.609022"
        },
        {
            authors: "Vasanthi, B.",
            date: "2022-12",
            title: "Role of AI in strengthening of entrepreneurship in agricultural cooperatives.",
            journal: "Research and Reflections on Education.",
            link: ""
        },
        {
            authors: "Vasanthi, B.",
            date: "2022-08",
            title: "Impact of AI in technology in HR management.",
            journal: "Purakala.",
            link: ""
        }
    ],


    "2021-22": [
        {
            authors: "Anjani, P. K.",
            date: "2022-07",
            title: "Improving sustainability of EDM sector by implementing unconventional competitive manufacturing approach.",
            journal: "Advances in Materials Science and Engineering. Scopus",
            link: ""
        },
        {
            authors: "Anjani, P. K.",
            date: "2022-05",
            title: "A study on role of financial literacy in women empowerment and financial inclusion in developing economies during COVID-19 pandemic outbreak.",
            journal: "NeuroQuantology. Scopus",
            link: ""
        },
        {
            authors: "Anjani, P. K.",
            date: "2022-08",
            title: "Static malware analysis using optimal machine learning algorithm for malware detection.",
            journal: "NeuroQuantology. Scopus",
            link: ""
        },
        {
            authors: "Immanuel, D.",
            date: "2022-06",
            title: "Analysis of effectiveness on financial management and financial planning in the education system.",
            journal: "The Seybold Journal. Scopus",
            link: ""
        },
        {
            authors: "Prabadevi, P.",
            date: "2022-01",
            title: "An investigation on the effect of employees’ empowerment and social support on organizational commitment and burnout.",
            journal: "AIP conference Proceedings",
            link: ""
        },
        {
            authors: "Prabadevi, P.",
            date: "2022-04",
            title: "Assessment of knowledge management practice in higher educational institutions with reference to Debre Tabor University, Ethiopia.",
            journal: "Journal of Positive School Psychology. Scopus",
            link: ""
        },
        {
            authors: "Nithya, N.",
            date: "2022-02",
            title: "Shift in the mindset: Increasing preference towards organic food products in Indian context.",
            journal: "Organic Agriculture. Web of Science",
            link: ""
        },
        {
            authors: "Nithya, N.",
            date: "2022-03",
            title: "Social network analysis for precise friend suggestion for Twitter by associating multiple networks using ML.",
            journal: "International Journal of Information Technology and Web Engineering. Web of Science",
            link: ""
        },
        {
            authors: "Nithya, N.",
            date: "2022-05",
            title: "An empirical study on influential factor of investor’s investment towards futures and options trading in India.",
            journal: "AIP Proceedings. Scopus",
            link: ""
        },
        {
            authors: "Shajahan, U. S.",
            date: "2022-05",
            title: "The impact of retail investor’s behavior on equity shares in Chennai city – An empirical study.",
            journal: "International Journal of Early Childhood Special Education. Web of Science",
            link: ""
        },
        {
            authors: "Kamalaveni, M. S.",
            date: "2022-05",
            title: "A case study on establishing HR policy at Sri Krishna Foods.",
            journal: "International Journal of Early Childhood Special Education. Case Study",
            link: ""
        },
        {
            authors: "Rameshkumaar, V. P.",
            date: "2022-05",
            title: "Consumer inclination to purchase personal care products in Salem City.",
            journal: "ECS Transactions. Scopus",
            link: ""
        },
        {
            authors: "Rameshkumaar, V. P.",
            date: "2022-05",
            title: "Supply chain in MSME sector: Concerns and mitigation.",
            journal: "ECS Transactions. Scopus",
            link: ""
        },
        {
            authors: "Ganesan, D.",
            date: "2022-06",
            title: "Perception of customers towards service quality effectiveness of a co-operative bank – An empirical study.",
            journal: "International Journal of Early Childhood Special Education. Web of Science",
            link: ""
        },
        {
            authors: "Umarani, C.",
            date: "2022-06",
            title: "An impact of employee motivation on job performance of the employee.",
            journal: "International Journal of Early Childhood Special Education. Web of Science",
            link: ""
        },
        {
            authors: "Saravanan, S.",
            date: "2022-05",
            title: "A study on consumer perception towards e-shopping portals in Salem, Tamil Nadu.",
            journal: "International Journal of Early Childhood Special Education. Web of Science",
            link: ""
        }
    ],

};
