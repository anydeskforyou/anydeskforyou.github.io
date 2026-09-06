```javascript
const updates = {

    jobs: [

        {
            title: "UPPSC Professor & Assistant Professor Recruitment 2026",
            organization: "Uttar Pradesh Public Service Commission",
            lastDate: "15 September 2026",
            link: "https://uppsc.up.nic.in/",
            button: "Apply Online"
        },

        {
            title: "UPPSC Miscellaneous Examination 2026 - A-2/E-1/2026",
            organization: "Uttar Pradesh Public Service Commission",
            lastDate: "10 September 2026",
            link: "https://uppsc.up.nic.in/",
            button: "Apply Online"
        },

        {
            title: "UPPSC Miscellaneous Examination 2026 - A-3/E-1/2026",
            organization: "Uttar Pradesh Public Service Commission",
            lastDate: "10 September 2026",
            link: "https://uppsc.up.nic.in/",
            button: "Apply Online"
        },

        {
            title: "UP Police Home Guard Enrollment 2025",
            organization: "Uttar Pradesh Police Recruitment & Promotion Board",
            lastDate: "PET / Admit Card Update",
            link: "https://uppbpb.gov.in/",
            button: "Official Website"
        }

    ],

    results: [

        {
            title: "UPPSC Latest Results & Selection Updates",
            organization: "Uttar Pradesh Public Service Commission",
            date: "06 September 2026",
            link: "https://uppsc.up.nic.in/",
            button: "Check Result"
        },

        {
            title: "UP Police Latest Results & Updates",
            organization: "UP Police Recruitment & Promotion Board",
            date: "06 September 2026",
            link: "https://uppbpb.gov.in/",
            button: "Check Result"
        }

    ],

    admitCards: [

        {
            title: "UPPSC Research Assistant (Engineering) Examination 2025",
            organization: "Uttar Pradesh Public Service Commission",
            examDate: "Admit Card Available",
            link: "https://uppsc.up.nic.in/",
            button: "Download Admit Card"
        },

        {
            title: "UPPSC Lecturer U.P. Technical Education Examination 2025",
            organization: "Uttar Pradesh Public Service Commission",
            examDate: "Admit Card Available",
            link: "https://uppsc.up.nic.in/",
            button: "Download Admit Card"
        },

        {
            title: "UP Police Home Guard PET 2025",
            organization: "UP Police Recruitment & Promotion Board",
            examDate: "PET Admit Card Available",
            link: "https://uppbpb.gov.in/",
            button: "Download Admit Card"
        }

    ],

    answerKeys: [

        {
            title: "UPPSC Latest Answer Key",
            organization: "Uttar Pradesh Public Service Commission",
            date: "06 September 2026",
            link: "https://uppsc.up.nic.in/",
            button: "View Answer Key"
        },

        {
            title: "UP Police Latest Answer Key",
            organization: "UP Police Recruitment & Promotion Board",
            date: "06 September 2026",
            link: "https://uppbpb.gov.in/",
            button: "View Answer Key"
        }

    ]

};
```

**ध्यान दें:** मैंने जानबूझकर ऐसे direct URLs नहीं बनाए जो verify नहीं हुए हैं। UPPSC की official notification page पर ये applications और उनकी dates verified हैं। UP Police की official site पर current Home Guard/Police notices verified हैं।

अब अगला काम आपकी **`index.html` को इस `data.js` से connect करना** है। अभी आपकी HTML में SSC/Railway/Police के cards manually लिखे हुए हैं। उन्हें हटाकर JavaScript से automatic cards बनवाएँगे।

इससे आगे आपको सिर्फ `data.js` में नया item जोड़ना पड़ेगा—**`index.html` बार-बार edit नहीं करना पड़ेगा।**
